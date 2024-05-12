import styled from 'styled-components';
import { useRecoilValue, useRecoilState } from 'recoil';
import { useEffect } from 'react';

// component
import { Container } from 'components/_common/pageLayout';
import NavBar from 'components/_common/Navbar';
import Header from 'components/_common/Header';
import Explanation from 'components/_common/Explanation';
import ResultBox from 'components/recommend/ResultBox';

// api
import { saveUserInfo } from 'api/user';

// recoil
import { RecommendAtom } from 'recoil/Recommend';
import { UserDetailAtom } from 'recoil/UserDetail';
import { UserAtom } from 'recoil/User';
import { LoginAtom } from 'recoil/Login';

const RecommendPage = () => {
    // 로그인 정보
    const loginInfo = useRecoilValue(LoginAtom);
    // 사용자 정보
    const userDetail = useRecoilValue(UserDetailAtom);
    // 추천 취미 정보
    const recommendInfo = useRecoilValue(RecommendAtom);
    // 사용자 id 서버에서 반환 받은 후 저장
    const [userId, setUserId] = useRecoilState(UserAtom);

    // 사용자 정보 post 후 user_id 반환 받기
    useEffect(() => {
        const userInfo = {
            name: loginInfo.name,
            age: userDetail.age,
            gender: userDetail.gender,
            home: userDetail.location,
            income: userDetail.income,
            motive: userDetail.motive,
            work: userDetail.weekday,
            wkend: userDetail.weekend,
        };

        saveUserInfo({ userInfo: userInfo }).then((res) => {
            setUserId({
                id: res?.data.id,
            });
        });
    }, [userDetail]);

    return (
        <Wrapper>
            <NavBar />
            <Container>
                <Header bold={loginInfo.name} reg="님을 위한 취미는 . . . " />
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
