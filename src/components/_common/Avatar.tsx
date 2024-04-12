import styled from 'styled-components';

import { ImgStyle } from './commonStyle';

import defaultProfile from '../../assets/_common/defaultProfile.png';

const Avatar = ({ type }: { type: 'navbar' | 'sidebar' }) => {
    return (
        <UserProfile className={type}>
            {/* 유저 프로필 불러오기 */}
            {/* <img src="/" alt="user-profile" /> */}
        </UserProfile>
    );
};

export default Avatar;

const UserProfile = styled.div`
    background-image: url(${defaultProfile});
    background-size: contain;

    border-radius: 50%;
    overflow: hidden;

    // 네비게이션바
    &.navbar {
        width: 30px;
        height: 30px;
        position: absolute;
        right: 15px;

        @media (min-width: 650px) {
            display: none;
        }
    }

    // 사이드바
    &.sidebar {
        width: 40px;
        height: 40px;

        @media (min-width: 650px) {
            width: 30px;
            height: 30px;
        }
    }

    img {
        ${ImgStyle}
    }
`;
