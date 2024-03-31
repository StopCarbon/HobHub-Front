import styled from 'styled-components';
import { useEffect, useState } from 'react';

// component
import Navbar from 'components/_common/Navbar';
import Header from 'components/_common/Header';
import ArchiveFolder from 'components/archivefolder/ArchiveFolder';
import { Container } from 'components/_common/pageLayout';
import { HobbyList } from 'components/_common/props';

// api
import { getHobbyList } from 'api/hobbylist';

const ArchiveFolderPage = () => {
    // 사용자의 취미 아카이브 목록
    const [hobbyList, setHobbyList] = useState<HobbyList[]>([]);

    // 사용자의 취미 아카이브 목록 가져오기 api
    useEffect(() => {
        getHobbyList({ user_id: 1 }).then((res) => {
            setHobbyList(res?.data);
            console.log('data: ', res?.data);
        });
    }, []);

    return (
        <Wrapper>
            <Navbar />
            <Container>
                <Header reg="나의 취미 아카이브" />
                <FolderWrapper>
                    {hobbyList.map((e, idx) => (
                        <ArchiveFolder
                            hobbyId={e?.id}
                            order={idx + 1}
                            hobby={e?.hobby}
                        />
                    ))}
                </FolderWrapper>
            </Container>
        </Wrapper>
    );
};

export default ArchiveFolderPage;

const Wrapper = styled.div`
    position: relative;
`;

const FolderWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    margin-top: 30px;

    @media (min-width: 1024px) {
        margin-top: 40px;
        justify-content: center;
    }
`;
