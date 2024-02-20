import styled from 'styled-components';
import { useParams, useNavigate } from 'react-router-dom';

import { Container } from 'components/_common/pageLayout';
import Navbar from 'components/_common/Navbar';
import Header from 'components/_common/Header';
import ArchiveBox from 'components/archive/ArchiveBox';

import plus from '../assets/archive/plus.svg';

const ArchivePage = () => {
    const { hobby } = useParams(); // 아카이브 폴더명
    const navigate = useNavigate();

    const handleAddClick = () => {
        navigate('/create');
    };

    return (
        <Wrapper>
            <Navbar />
            <Container>
                <Header bold={hobby + '\u00A0'} reg="아카아브" />
                <ArchiveBoxWrapper>
                    <ArchiveBox />
                    <ArchiveBox />
                    <ArchiveBox />
                    <ArchiveBox />
                </ArchiveBoxWrapper>
                <AddButton onClick={handleAddClick}>
                    <img src={plus} alt="add" />
                </AddButton>
            </Container>
        </Wrapper>
    );
};

export default ArchivePage;

const Wrapper = styled.div`
    position: relative;
`;

const AddButton = styled.button`
    width: 80px;
    height: 80px;
    border-radius: 50%;
    box-shadow: var(--popup-shadow);
    background-color: var(--pink);
    background-image: linear-gradient(to top, var(--blue2) 0%, transparent 80%);
    background-size: cover;

    position: absolute;
    right: 20px;
    bottom: -70px; // Wrapper를 기준으로 간격 조정

    @media (min-width: 1024px) {
        width: 100px;
        height: 100px;
        cursor: pointer;

        &:hover {
            transform: rotate(180deg);
            transition: transform 300ms ease-in-out;
        }
    }
`;

const ArchiveBoxWrapper = styled.div`
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
