import styled from 'styled-components';

import Navbar from 'components/_common/Navbar';
import Header from 'components/_common/Header';
import ArchiveFolder from 'components/archive_folder/ArchiveFolder';
import { Container } from 'components/_common/pageLayout';

const ArchiveFolderPage = () => {
    return (
        <Wrapper>
            <Navbar />
            <Container>
                <Header reg="나의 취미 아카이브" />
                <FolderWrapper>
                    <ArchiveFolder order={1} hobby="베이킹" />
                    <ArchiveFolder order={2} hobby="등산" />
                    <ArchiveFolder order={3} hobby="등산" />
                    <ArchiveFolder order={4} hobby="등산" />
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
    }
`;
