import styled from 'styled-components';
import { useRecoilValue } from 'recoil';

// component
import Avatar from './Avatar';
import Logo from './Logo';
import { ImgStyle } from './commonStyle';

// asset
import home from '../../assets/sidebar/home.svg';
import chat from '../../assets/sidebar/message-circle.svg';
import list from '../../assets/sidebar/file-text.svg';
import anchor from '../../assets/sidebar/anchor.svg';
import bell from '../../assets/sidebar/bell.svg';
import user from '../../assets/sidebar/user.svg';

// recoil
import { LoginAtom } from 'recoil/Login';

const Sidebar = () => {
    // 로그인 정보 가져오기
    const loginInfo = useRecoilValue(LoginAtom);

    return (
        <Wrapper>
            <Logo type="sidebar" />
            <AvatarWrapper>
                <Avatar type="sidebar" />
                <p>{loginInfo.name}</p>
            </AvatarWrapper>
            <Border className="first" />
            <MenuWrapper>
                <ListItem href="/main">
                    <Icon>
                        <img src={home} alt="mainpage" />
                    </Icon>
                    <p>메인 페이지</p>
                </ListItem>
                <ListItem href="/chat">
                    <Icon>
                        <img src={chat} alt="chat" />
                    </Icon>
                    <p>챗봇과 대화하기</p>
                </ListItem>
                <ListItem href="/recommend">
                    <Icon>
                        <img src={list} alt="list" />
                    </Icon>
                    <p>나의 추천 취미</p>
                </ListItem>
                <ListItem href="/archive">
                    <Icon>
                        <img src={anchor} alt="anchor" />
                    </Icon>
                    <p>나의 취미 아카이브</p>
                </ListItem>
                <ListItem href="/alarm">
                    <Icon>
                        <img src={bell} alt="bell" />
                    </Icon>
                    <p>알림</p>
                </ListItem>
                <ListItem>
                    <Icon>
                        <img src={user} alt="user" />
                    </Icon>
                    <p>로그아웃</p>
                </ListItem>
            </MenuWrapper>
            <Border />
        </Wrapper>
    );
};

export default Sidebar;

const Wrapper = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    background-color: white;
    width: 70%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    padding: 30px 20px;
    font-size: 20px;
    overscroll-behavior: contain;
    z-index: 10;
    animation: sidebar-show 0.3s;
    overflow-y: auto;

    @keyframes sidebar-show {
        from {
            transform: translate3d(-250px, 0, 0);
        }
        to {
            transform: translate3d(0, 0, 0);
        }
    }

    @media (min-width: 650px) {
        width: var(--sidebar);
        padding: 0;
        z-index: 0;
        animation: none;
        padding-top: 10px;
        border-right: 1px solid #e0e2e7;
        font-size: 14px;
        position: absolute;
    }

    &::-webkit-scrollbar {
        display: none;
    }
`;

const Border = styled.div`
    width: 100%;
    height: 0;
    border-bottom: solid 1px #e0e2e7;

    &.first {
        margin: 28px 0;
    }

    @media (min-width: 650px) {
        &.first {
            margin-top: 15px;
            margin-bottom: 0;
        }
    }
`;

const AvatarWrapper = styled.div`
    display: flex;
    align-items: center;
    margin-top: 33px;

    p {
        margin-left: 15px;
    }

    @media (min-width: 650px) {
        margin-top: 12px;
        padding: 0 5px;
    }
`;

const MenuWrapper = styled.ul`
    display: flex;
    flex-direction: column;
`;

const ListItem = styled.a`
    display: flex;
    align-items: center;
    margin-bottom: 24px;
    p {
        white-space: nowrap;
    }

    @media (min-width: 650px) {
        margin-bottom: 0;
        padding: 13px 8px;
        border-radius: 8px;

        &:hover {
            cursor: pointer;
            background-color: var(--grey);
            transition: background-color 200ms ease-in-out;
        }
    }
`;

const Icon = styled.div`
    margin-right: 15px;

    @media (min-width: 650px) {
        width: 22px;
        height: 22px;

        img {
            ${ImgStyle}
        }
    }
`;
