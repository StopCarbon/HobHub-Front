import styled from 'styled-components';

const AlertTitle = ({ text }: { text: string }) => {
    return <Wrapper>{text}</Wrapper>;
};

export default AlertTitle;

const Wrapper = styled.p`
    color: rgb(0, 0, 0, 0.8);
    font-family: nanum-light;
    font-size: 18px;
    line-height: 25px;
    word-break: keep-all;

    @media (min-width: 650px) {
        font-size: 16px;
        line-height: 22px;
    }
`;
