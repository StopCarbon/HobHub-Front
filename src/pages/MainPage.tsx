import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

import { Container } from 'components/_common/pageLayout';
import Navbar from 'components/_common/Navbar';
import Header from 'components/_common/Header';
import HobbySection from 'components/main/HobbySection';
import { ImgStyle } from 'components/_common/commonStyle';
import { BoardList } from 'components/_common/props';

import chatIcon from '../assets/_common/Chat.svg';

import {
    getAgeMainBoard,
    getLocationMainBoard,
    getMotiveMainBoard,
} from 'api/main';

const MainPage = () => {
    const [ageList, setAgeList] = useState<BoardList[]>();
    const [locList, setLocList] = useState<BoardList[]>();
    const [motList, setMotList] = useState<BoardList[]>([]);

    // 챗 아이콘 클릭하면 챗봇 페이지로 이동
    const navigate = useNavigate();
    const handleChatClick = () => {
        navigate('/chat');
    };

    // 사용자의 나이대에 따른 다른 사용자들의 게시물 가져오기 api
    useEffect(() => {
        getAgeMainBoard({ age: 30 }).then((res) => {
            setAgeList(res?.data);
            console.log(res?.data);
        });
    }, []);

    // 사용자의 지역에 따른 다른 사용자들의 게시물 가져오기 api
    // useEffect(() => {
    //     getLocationMainBoard({ home: '경기도' }).then((res) => {
    //         setLocList(res?.data);
    //         console.log(res?.data);
    //     });
    // }, []);

    // 사용자의 동기에 따른 다른 사용자들의 게시물 가져오기 api
    useEffect(() => {
        getMotiveMainBoard({ motive: '대인관계' }).then((res) => {
            setMotList(res?.data);
            console.log(res?.data);
        });
    }, []);

    return (
        <Wrapper>
            <Navbar />
            <Container>
                <Header
                    type="noArrow"
                    reg="다른 사용자들이 즐긴 취미를 탐색해보세요."
                />
                {ageList && (
                    <HobbySection
                        reg1="민지님과 같은"
                        bold="#30대"
                        reg2="가 좋아한 취미"
                        data={ageList}
                    />
                )}
                {locList && (
                    <HobbySection
                        reg1="민지님과 같은"
                        bold="#경기도 거주자"
                        reg2="가 좋아한 취미"
                        data={locList}
                    />
                )}
                {motList && (
                    <HobbySection
                        reg1="민지님과 같은"
                        bold="#대인관계 목적의 사용자"
                        reg2="가 좋아한 취미"
                        data={motList}
                    />
                )}
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
    width: 70px;
    height: 70px;

    position: fixed;
    right: 15px;
    bottom: 25px;

    img {
        ${ImgStyle}
    }

    @media (min-width: 650px) {
        width: 50px;
        height: 50px;
        right: 10vw;
        cursor: pointer;

        &:hover {
            transform: rotateY(360deg);
            transition: transform 500ms ease-in-out;
        }
    }
`;
