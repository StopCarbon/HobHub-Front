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
                <AddButton onClick={handleAddClick}>
                    <img src={plus} alt="add" />
                </AddButton>
                <ArchiveBox></ArchiveBox>
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

    /* position: absolute;
    right: 20px;
    top: 300px; */

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
