import styled from 'styled-components';

const Explanation = ({ text }: { text: string }) => {
    return <Exp>{text}</Exp>;
};

export default Explanation;

const Exp = styled.p`
    font-family: nanum-light;
    font-size: 14px;
    margin: 8px 0 25px 45px;
    white-space: nowrap;

    @media (min-width: 1024px) {
        font-size: 16px;
        margin: 8px 0 30px 90px;
    }
`;
