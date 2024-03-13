import styled from 'styled-components';

import { ImgStyle } from 'components/_common/commonStyle';

import errorImg from '../assets/error/404.png';

const ErrorPage = () => {
    return (
        <Wrapper>
            <Error>
                <img src={errorImg} alt="error" />
            </Error>
            <p>잘못된 경로로 접근하셨습니다!</p>
        </Wrapper>
    );
};

export default ErrorPage;

const Wrapper = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    p {
        font-size: 20px;
    }

    @media (min-width: 1024px) {
        p {
            font-size: 26px;
        }
    }
`;

const Error = styled.div`
    width: 50%;
    margin-bottom: 50px;

    img {
        ${ImgStyle}
    }

    @media (min-width: 1024px) {
        width: 30%;
    }
`;
