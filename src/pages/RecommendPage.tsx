import styled from 'styled-components';
import { useRecoilValue } from 'recoil';

import { Container } from 'components/_common/pageLayout';
import NavBar from 'components/_common/Navbar';
import Header from 'components/_common/Header';
import Explanation from 'components/_common/Explanation';
import ResultBox from 'components/recommend/ResultBox';

import { RecommendAtom } from 'recoil/Recommend';

const RecommendPage = () => {
    // 추천 취미 정보
    const recommendInfo = useRecoilValue(RecommendAtom);

    return (
        <Wrapper>
            <NavBar />
            <Container>
                <Header bold="민지" reg="님을 위한 취미는 . . . " />
                <Explanation text="아이콘을 클릭하여 바로 취미 활동을 시작해보세요!" />
                <ResultWrapper>
                    <ResultBox
                        ranking={1}
                        detailhobby={recommendInfo.hobby1}
                        category={recommendInfo.category1}
                        percent={recommendInfo.similarity1}
                    />
                    <ResultBox
                        ranking={2}
                        detailhobby={recommendInfo.hobby2}
                        category={recommendInfo.category2}
                        percent={recommendInfo.similarity2}
                    />
                    <ResultBox
                        ranking={3}
                        detailhobby={recommendInfo.hobby3}
                        category={recommendInfo.category3}
                        percent={recommendInfo.similarity3}
                    />
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
