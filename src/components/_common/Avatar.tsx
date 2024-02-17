import styled from 'styled-components';
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

    &.navbar {
        width: 30px;
        height: 30px;
        position: absolute;
        right: 15px;

        @media (min-width: 1024px) {
            display: none;
        }
    }

    &.sidebar {
        width: 40px;
        height: 40px;

        @media (min-width: 1024px) {
            display: none;
        }
    }

    img {
        display: block;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;
