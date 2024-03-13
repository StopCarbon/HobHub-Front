import styled from 'styled-components';

import { Container } from 'components/_common/pageLayout';
import NavBar from 'components/_common/Navbar';
import Header from 'components/_common/Header';
import Explanation from 'components/_common/Explanation';
import CategoryResultBox from 'components/recommend/CategoryResultBox';

const CategoryRecommendPage = () => {
    return (
        <Wrapper>
            <NavBar />
            <Container>
                <Header bold="민지" reg="님을 위한 취미는 . . . " />
                <Explanation text="아이콘을 클릭하여 세부적인 취미를 골라주세요!" />
                <ResultWrapper>
                    <CategoryResultBox category="베이킹" similarity={88} />
                </ResultWrapper>
            </Container>
        </Wrapper>
    );
};

export default CategoryRecommendPage;

const Wrapper = styled.div`
    position: relative; // PC 버전 container 때문
`;

const ResultWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;
