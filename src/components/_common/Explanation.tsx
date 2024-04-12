import styled from 'styled-components';

const Explanation = ({ text }: { text: string }) => {
    return <Exp>{text}</Exp>;
};

export default Explanation;

const Exp = styled.p`
    font-family: nanum-light;
    font-size: 14px;
    line-height: 20px;
    margin: 8px 0 25px 45px;
    word-break: keep-all;

    @media (min-width: 650px) {
        font-size: 12px;
        margin: 0 0 20px 50px;
    }
`;
