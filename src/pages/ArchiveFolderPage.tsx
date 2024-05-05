import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';

// component
import Navbar from 'components/_common/Navbar';
import Header from 'components/_common/Header';
import ArchiveFolder from 'components/archivefolder/ArchiveFolder';
import { Container } from 'components/_common/pageLayout';
import { HobbyList } from 'components/_common/props';

// api
import { getHobbyList } from 'api/hobbylist';

// recoil
import { UserAtom } from 'recoil/User';

const ArchiveFolderPage = () => {
    const userInfo = useRecoilValue(UserAtom);

    // 사용자의 취미 아카이브 목록
    const [hobbyList, setHobbyList] = useState<HobbyList[]>([]);

    // 사용자의 취미 아카이브 목록 가져오기 api
    useEffect(() => {
        getHobbyList({ user_id: userInfo.id }).then((res) => {
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
                    {hobbyList &&
                        hobbyList.map((e, idx) => (
                            <ArchiveFolder
                                hobbyId={e?.id}
                                order={idx + 1}
                                category={e?.category}
                                hobby={e?.hobby}
                            />
                        ))}
                    {/* <ArchiveFolder
                        hobbyId={2}
                        order={1}
                        category={'베이킹'}
                        hobby={'마들렌'}
                    />*/}
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

    @media (min-width: 650px) {
        margin-top: 20px;
        justify-content: center;
    }
`;
