import styled from 'styled-components';

import { Container } from 'components/_common/pageLayout';
import NavBar from 'components/_common/Navbar';
import Header from 'components/_common/Header';
import Explanation from 'components/_common/Explanation';
import ResultBox from 'components/recommendpage/ResultBox';

const RecommendPage = () => {
    return (
        <Wrapper>
            <NavBar />
            <Container>
                <Header bold="민지" reg="님을 위한 취미는 . . . " />
                <Explanation text="아이콘을 클릭하여 바로 취미 활동을 시작해보세요!" />
                <ResultWrapper>
                    <ResultBox ranking={1} hobby="등산" similarity={88} />
                    <ResultBox ranking={2} hobby="베이킹" similarity={70} />
                    <ResultBox ranking={3} hobby="공예" similarity={68} />
                </ResultWrapper>
            </Container>
        </Wrapper>
    );
};

export default RecommendPage;

const Wrapper = styled.div`
    position: relative; // PC 버전 container 때문
`;

const ResultWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;
