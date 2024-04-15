import styled from 'styled-components';
import loginButton from '../assets/loginpage/kakao_login_button_sm.svg';
import Logo from 'components/_common/Logo';
import shadow from '../assets/_common/shadow.svg';

const LoginPage = () => {
    return (
        <Wrapper>
            <Logo type="login" />
            <Shadow src={shadow} />
            <LoginButton src={loginButton} />
        </Wrapper>
    );
};

export default LoginPage;

const Wrapper = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    background-color: var(--pink);
    background-image: linear-gradient(
        to top,
        var(--blue2) 0%,
        transparent 100%
    );
    background-size: cover;
`;

const Shadow = styled.img`
    width: calc(100% - 140px);
    opacity: 0.5;

    @media (min-width: 650px) {
        width: 210px;
    }
`;

const LoginButton = styled.img`
    width: calc(100% - 80px);
    margin-top: 250px;
    cursor: pointer;

    @media (min-width: 650px) {
        width: 250px;
        margin-top: 100px;
    }
`;
