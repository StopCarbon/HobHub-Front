import styled from 'styled-components';
import loginButton from '../assets/loginpage/kakao_login_button_sm.svg';
import Logo from 'components/_common/Logo';
import shadow from '../assets/_common/shadow.svg';

const LoginPage = () => {
    return (
        <Wrapper>
            <Logo type="main"></Logo>
            <Shadow src={shadow}></Shadow>
            <LoginButton src={loginButton}></LoginButton>
        </Wrapper>
    );
};

export default LoginPage;

const Wrapper = styled.div`
    width: 100%;
    height: 100vh;
    background-color: var(--pink);
    background-image: linear-gradient(
        to top,
        var(--blue2) 0%,
        transparent 100%
    );
    background-size: cover;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Shadow = styled.img`
    width: calc(100% - 140px);
    opacity: 0.5;

    @media (min-width: 1024px) {
        width: 330px;
    }
`;

const LoginButton = styled.img`
    width: calc(100% - 80px);
    margin-top: 250px;
    cursor: pointer;

    @media (min-width: 1024px) {
        width: 500px;
        margin-top: 300px;
    }
`;
