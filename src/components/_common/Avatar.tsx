import styled from 'styled-components';

import { ImgStyle } from './commonStyle';

import defaultProfile from '../../assets/_common/defaultProfile.png';

const Avatar = ({ type }: { type: 'navbar' | 'sidebar' }) => {
    return (
        <UserProfile className={type}>
            <img src={defaultProfile} alt="user-profile" />
        </UserProfile>
    );
};

export default Avatar;

const UserProfile = styled.div`
    border-radius: 50%;
    overflow: hidden;

    // 네비게이션바
    &.navbar {
        width: 30px;
        height: 30px;
        position: absolute;
        right: 15px;

        @media (min-width: 1024px) {
            display: none;
        }
    }

    // 사이드바
    &.sidebar {
        width: 40px;
        height: 40px;

        @media (min-width: 1024px) {
            width: 60px;
            height: 60px;
        }
    }

    img {
        ${ImgStyle}
    }
`;
