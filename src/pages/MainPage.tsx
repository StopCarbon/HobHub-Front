import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

import { Container } from 'components/_common/pageLayout';
import Navbar from 'components/_common/Navbar';
import Header from 'components/_common/Header';
import HobbySection from 'components/main/HobbySection';
import { ImgStyle } from 'components/_common/commonStyle';

import chatIcon from '../assets/_common/Chat.svg';

const MainPage = () => {
    const navigate = useNavigate();
    const handleChatClick = () => {
        navigate('/chat');
    };

    return (
        <Wrapper>
            <Navbar />
            <Container>
                <Header
                    type="noArrow"
                    reg="다른 사용자들이 즐긴 취미를 탐색해보세요."
                />
                <HobbySection
                    reg1="민지님과 같은"
                    bold="#20대"
                    reg2="들이 좋아한 취미"
                />
                <HobbySection
                    reg1="민지님과 같은"
                    bold="#20대"
                    reg2="들이 좋아한 취미"
                />
                <HobbySection
                    reg1="민지님과 같은"
                    bold="#수원시 거주자"
                    reg2="들이 좋아한 취미"
                />
                <IconWrapper onClick={handleChatClick}>
                    <img src={chatIcon} alt="chat" />
                </IconWrapper>
            </Container>
        </Wrapper>
    );
};

export default MainPage;

const Wrapper = styled.div`
    position: relative;
`;

const IconWrapper = styled.div`
    width: 65px;
    height: 65px;

    position: fixed;
    right: 15px;
    bottom: 25px;

    img {
        ${ImgStyle}
    }

    @media (min-width: 1024px) {
        width: 80px;
        height: 80px;
        right: 8vw;
        cursor: pointer;

        &:hover {
            transform: rotateY(360deg);
            transition: transform 500ms ease-in-out;
        }
    }
`;
