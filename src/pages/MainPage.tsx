import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';

// component
import { Container } from 'components/_common/pageLayout';
import Navbar from 'components/_common/Navbar';
import Header from 'components/_common/Header';
import HobbySection from 'components/main/HobbySection';
import { ImgStyle } from 'components/_common/commonStyle';
import { BoardList } from 'components/_common/props';

// asset
import chatIcon from '../assets/_common/Chat.svg';
import warning from '../assets/_common/warning.svg';

// api
import {
    getAgeMainBoard,
    getLocationMainBoard,
    getMotiveMainBoard,
    getGenderMainBoard,
    getIncomeMainBoard,
} from 'api/main';

// recoil
import { UserDetailAtom } from 'recoil/UserDetail';
import { UserDetailAvailableAtom } from 'recoil/UserDetail';

const MainPage = () => {
    const [ageList, setAgeList] = useState<BoardList[]>();
    const [locList, setLocList] = useState<BoardList[]>();
    const [genList, setGenList] = useState<BoardList[]>();
    const [incList, setIncList] = useState<BoardList[]>();
    const [motList, setMotList] = useState<BoardList[]>([]);

    const userDetail = useRecoilValue(UserDetailAtom); // 사용자 정보 가져오기
    const isUserDetail = useRecoilValue(UserDetailAvailableAtom); // 사용자 정보 존재 여부 가져오기

    // 챗 아이콘 클릭하면 챗봇 페이지로 이동
    const navigate = useNavigate();
    const handleChatClick = () => {
        navigate('/chat');
    };

    // 사용자의 나이대에 따른 다른 사용자들의 게시물 가져오기 api
    useEffect(() => {
        getAgeMainBoard({ age: userDetail.age }).then((res) => {
            setAgeList(res?.data);
            console.log(res?.data);
        });
    }, []);

    // 사용자의 성별에 따른 다른 사용자들의 게시물 가져오기 api
    useEffect(() => {
        getGenderMainBoard({ gender: userDetail.gender }).then((res) => {
            setGenList(res?.data);
            console.log(res?.data);
        });
    }, []);

    // 사용자의 지역에 따른 다른 사용자들의 게시물 가져오기 api
    useEffect(() => {
        getLocationMainBoard({ home: userDetail.location }).then((res) => {
            setLocList(res?.data);
            console.log(res?.data);
        });
    }, []);

    // 사용자의 동기에 따른 다른 사용자들의 게시물 가져오기 api
    useEffect(() => {
        getMotiveMainBoard({ motive: userDetail.motive }).then((res) => {
            setMotList(res?.data);
            console.log('요청', userDetail.motive);
            console.log('motive', res?.data);
        });
    }, []);

    // 사용자의 수입에 따른 다른 사용자들의 게시물 가져오기 api
    useEffect(() => {
        getIncomeMainBoard({ income: userDetail.income }).then((res) => {
            setIncList(res?.data);
        });
    }, []);

    return (
        <Wrapper>
            <Navbar />
            <Container>
                {isUserDetail.available ? (
                    <>
                        <Header
                            type="noArrow"
                            reg="다른 사용자들이 즐긴 취미를 탐색해보세요."
                        />
                        {ageList && (
                            <HobbySection
                                bold={`#${userDetail.age}대`}
                                data={ageList}
                            />
                        )}
                        {genList && (
                            <HobbySection
                                bold={`#${userDetail.gender}`}
                                data={genList}
                            />
                        )}
                        {locList && (
                            <HobbySection
                                bold={`#${userDetail.location} 거주자`}
                                data={locList}
                            />
                        )}
                        {motList && (
                            <HobbySection
                                bold={`#${userDetail.motive} 목적의 사용자`}
                                data={motList}
                            />
                        )}
                        {incList && (
                            <HobbySection
                                bold="#수입의 사용자"
                                data={incList}
                            />
                        )}
                    </>
                ) : (
                    <NoInfo>
                        <ImgWrapper>
                            <img src={warning} />
                        </ImgWrapper>
                        <p>
                            챗봇과 간단한 대화 후 사용자님과 같은 조건을 가진
                            다른 사용자들이 즐긴 취미를 탐색해보세요!
                        </p>
                    </NoInfo>
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

const NoInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    img {
        ${ImgStyle}
    }

    p {
        font-size: 18px;
        text-align: center;
        word-break: keep-all;
        line-height: 22px;
    }

    @media (min-width: 650px) {
        p {
            font-size: 16px;
        }
    }
`;

const ImgWrapper = styled.div`
    width: 150px;
    margin: 20px 0;
`;
