import styled from 'styled-components';

import { Container } from 'components/_common/pageLayout';
import NavBar from 'components/_common/Navbar';
import Header from 'components/_common/Header';
import Explanation from 'components/_common/Explanation';
import ResultBox from 'components/recommend/ResultBox';

// 유사도가 높은 순으로 정렬된 추천 취미
const recommendList = {
    아웃도어: 88,
    베이킹: 72,
    스포츠: 53,
};

const RecommendPage = () => {
    return (
        <Wrapper>
            <NavBar />
            <Container>
                <Header bold="민지" reg="님을 위한 취미는 . . . " />
                <Explanation text="아이콘을 클릭하여 세부적인 취미를 골라주세요!" />
                <ResultWrapper>
                    {Object.entries(recommendList).map(
                        ([hobby, similarity], index) => (
                            <ResultBox
                                key={index}
                                ranking={index + 1}
                                hobby={hobby}
                                similarity={similarity}
                            />
                        ),
                    )}
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
