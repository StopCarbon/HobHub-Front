import styled from 'styled-components';

import { Container } from 'components/_common/pageLayout';

import NavBar from 'components/_common/Navbar';
import Header from 'components/_common/Header';
import ResultBox from 'components/recommend/ResultBox';

const RecommendPage = () => {
    return (
        <Wrapper>
            <NavBar />
            <Container>
                <Header bold="민지" reg="님을 위한 취미는 . . . " />
                <Exp>아이콘을 클릭하여 바로 취미 활동을 시작해보세요!</Exp>
                <ResultBox ranking={1} hobby="등산" similarity={88} />
                <ResultBox ranking={2} hobby="베이킹" similarity={70} />
                <ResultBox ranking={3} hobby="공예" similarity={68} />
            </Container>
        </Wrapper>
    );
};

export default RecommendPage;

const Wrapper = styled.div`
    position: relative; // PC 버전 container 때문
`;

const Exp = styled.p`
    font-family: nanum-light;
    font-size: 14px;
    margin: 8px 0 25px 45px;
    white-space: nowrap;

    @media (min-width: 1024px) {
        font-size: 16px;
        margin: 8px 0 40px 90px;
    }
`;
