import styled from 'styled-components';
import { useState, useEffect } from 'react';

import Logo from './Logo';
import Avatar from './Avatar';
import Sidebar from './Sidebar';
import Overlay from './Overlay';

import drawerIcon from '../../assets/_common/drawerIcon.svg';

const Navbar = ({}) => {
    // 사이드바 열고 닫기
    const [isSidebar, setSidebar] = useState(false);
    const openSidebar = () => {
        setSidebar(true);
    };
    const closeSidebar = () => {
        setSidebar(false);
    };

    // 페이지가 처음 로드될 때 화면 너비를 확인하여 Sidebar 상태 설정
    // -> PC일 경우 사이드바 열린 상태 유지
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 900) {
                setSidebar(true);
            }
        };
        handleResize();
        // 화면 크기 변화 감지
        window.addEventListener('resize', handleResize);
        // 컴포넌트 언마운트 시 리스너 제거
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <Wrapper>
            <IconWrapper onClick={openSidebar}>
                <img src={drawerIcon} alt="drawer" />
            </IconWrapper>
            <Logo type="navbar" />
            <Avatar type="navbar" />
            {isSidebar ? (
                <>
                    <Sidebar />
                    <Overlay closeSidebar={closeSidebar} />
                </>
            ) : null}
        </Wrapper>
    );
};

export default Navbar;

const Wrapper = styled.div`
    width: 100%;
    height: 56px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
    position: relative;

    @media (min-width: 1024px) {
        width: 1025px;
        height: 88px;
    }
`;

const IconWrapper = styled.div`
    position: absolute;
    left: 15px;
    top: 14px;
    cursor: pointer;

    @media (min-width: 1024px) {
        display: none;
    }
`;
