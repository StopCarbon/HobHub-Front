import styled from 'styled-components';
import logo from '../../assets/_common/logo.svg';

const Logo = ({ type }: { type?: 'main' }) => {
    return <LogoImg className={type} src={logo}></LogoImg>;
};

export default Logo;

const LogoImg = styled.img`
    width: 125px;

    @media (min-width: 1024px) {
        width: 200px;
    }

    // 메인 페이지
    &.main {
        width: calc(100% - 120px);
        margin-bottom: -13px;

        @media (min-width: 1024px) {
            width: 350px;
        }
    }
`;
