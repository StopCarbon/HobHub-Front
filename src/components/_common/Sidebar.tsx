import styled from 'styled-components';

import Avatar from './Avatar';
import Logo from './Logo';

import home from '../../assets/sidebar/home.svg';
import chat from '../../assets/sidebar/message-circle.svg';
import list from '../../assets/sidebar/file-text.svg';
import anchor from '../../assets/sidebar/anchor.svg';
import bell from '../../assets/sidebar/bell.svg';
import user from '../../assets/sidebar/user.svg';

const Sidebar = () => {
    return (
        <Wrapper>
            <Logo type="sidebar" />
            <AvatarWrapper>
                <Avatar type="sidebar" />
                <p>김민지</p>
            </AvatarWrapper>
            <Border className="first" />
            <MenuWrapper>
                <ListItem>
                    <Icon>
                        <img src={home} alt="mainpage" />
                    </Icon>
                    <p>메인 페이지</p>
                </ListItem>
                <ListItem>
                    <Icon>
                        <img src={chat} alt="chat" />
                    </Icon>
                    <p>챗봇과 대화하기</p>
                </ListItem>
                <ListItem>
                    <Icon>
                        <img src={list} alt="list" />
                    </Icon>
                    <p>나의 추천 취미</p>
                </ListItem>
                <ListItem>
                    <Icon>
                        <img src={anchor} alt="anchor" />
                    </Icon>
                    <p>나의 취미 아카이브</p>
                </ListItem>
                <ListItem>
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
    @keyframes sidebar-show {
        from {
            transform: translate3d(-250px, 0, 0);
        }
        to {
            transform: translate3d(0, 0, 0);
        }
    }

    @media (min-width: 1024px) {
        position: absolute;
        width: 320px;
        animation: none;
        border-right: 1px solid #e0e2e7;
        padding-right: 0;
        font-size: 24px;
    }
`;

const Border = styled.div`
    width: 100%;
    height: 0;
    border-bottom: solid 1px #e0e2e7;

    &.first {
        margin: 28px 0;
    }
`;

const AvatarWrapper = styled.div`
    display: flex;
    align-items: center;
    margin-top: 33px;

    p {
        margin-left: 20px;
    }

    @media (min-width: 1024px) {
        margin-top: 15px;
    }
`;

const MenuWrapper = styled.ul`
    display: flex;
    flex-direction: column;
`;

const ListItem = styled.li`
    display: flex;
    align-items: center;
    margin-bottom: 24px;
    p {
        white-space: nowrap;
    }

    @media (min-width: 1024px) {
        margin-bottom: 30px;
    }
`;

const Icon = styled.div`
    margin-right: 18px;
`;
