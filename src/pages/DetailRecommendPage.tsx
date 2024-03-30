import styled from 'styled-components';

import { Container } from 'components/_common/pageLayout';
import NavBar from 'components/_common/Navbar';
import Header from 'components/_common/Header';
import Explanation from 'components/_common/Explanation';
import DetailResultBox from 'components/recommend/DetailResultBox';

// 유사도가 높은 순으로 정렬된 세부 취미 추천
const recommendList = {
    등산: '아웃도어',
    쿠키: '베이킹',
    수영: '수상레포츠',
};

const DetailRecommendPage = () => {
    return (
        <Wrapper>
            <NavBar />
            <Container>
                <Header bold="민지" reg="님을 위한 취미는 . . . " />
                <Explanation text="아이콘을 클릭하여 바로 취미 활동을 시작해보세요!" />
                <ResultWrapper>
                    {Object.entries(recommendList).map(
                        ([detailhobby, category], index) => (
                            <DetailResultBox
                                key={index}
                                ranking={index + 1}
                                detailhobby={detailhobby}
                                category={category}
                                similarity={89}
                            />
                        ),
                    )}
                </ResultWrapper>
            </Container>
        </Wrapper>
    );
};

export default DetailRecommendPage;

const Wrapper = styled.div`
    position: relative; // PC 버전 container 때문
`;

const ResultWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;
