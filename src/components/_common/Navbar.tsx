import styled from 'styled-components';
import Logo from './Logo';

import drawerIcon from '../../assets/_common/drawerIcon.svg';
import defaultProfile from '../../assets/_common/defaultProfile.png';
import shadow from '../../assets/_common/shadow.svg';

const Header = ({}) => {
    return (
        <Wrapper>
            <IconWrapper>
                <img src={drawerIcon} alt="drawer" />
            </IconWrapper>
            <Logo />
            <UserProfile>
                <img src={defaultProfile} alt="user-profile" />
            </UserProfile>
        </Wrapper>
    );
};

export default Header;

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
    left: 10px;
    top: 14px;
    cursor: pointer;

    @media (min-width: 1024px) {
        display: none;
    }
`;

const UserProfile = styled.div`
    width: 30px;
    height: 30px;
    border-radius: 50%;
    overflow: hidden;

    position: absolute;
    right: 10px;

    @media (min-width: 1024px) {
        display: none;
    }

    img {
        display: block;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;
