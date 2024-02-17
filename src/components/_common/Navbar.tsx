import styled from 'styled-components';
import { useState, useEffect } from 'react';

import Logo from './Logo';
import Avatar from './Avatar';
import Sidebar from './Sidebar';
import Overlay from './Overlay';

import drawerIcon from '../../assets/_common/drawerIcon.svg';
import shadow from '../../assets/_common/shadow.svg';

const Navbar = ({}) => {
    // 사이드바 열고 닫기
    const [isSidebar, setSidebar] = useState(false);
    const openSidebar = () => {
        setSidebar(true);
    };
    const closeSidebar = () => {
        setSidebar(false);
    };

    return (
        <Wrapper>
            <IconWrapper onClick={openSidebar}>
                <img src={drawerIcon} alt="drawer" />
            </IconWrapper>
            <Logo />
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
    position: relative;

    @media (min-width: 1024px) {
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
