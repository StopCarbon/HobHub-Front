import styled from 'styled-components';

import Navbar from 'components/_common/Navbar';
import Header from 'components/_common/Header';
import ArchiveFolder from 'components/archivefolder/ArchiveFolder';
import { Container } from 'components/_common/pageLayout';

// 사용자의 취미 아카이브 목록
const archiveList = ['베이킹', '아웃도어', '스포츠', '베이킹'];

const ArchiveFolderPage = () => {
    return (
        <Wrapper>
            <Navbar />
            <Container>
                <Header reg="나의 취미 아카이브" />
                <FolderWrapper>
                    {archiveList.map((hobby, index) => (
                        <ArchiveFolder
                            key={index}
                            order={index + 1}
                            hobby={hobby}
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
