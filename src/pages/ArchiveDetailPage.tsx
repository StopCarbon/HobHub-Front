import styled from 'styled-components';

import { Container } from 'components/_common/pageLayout';
import { InputStyle } from 'components/_common/commonStyle';
import Navbar from 'components/_common/Navbar';
import Header from 'components/_common/Header';
import PictureBox from 'components/_common/PictureBox';

import cookie from '../../assets/archive/cookie.png';

const ArchiveDetailPage = () => {
    return (
        <Wrapper>
            <Navbar />
            <Container>
                <Header reg="2024.3.15" />
                <ContentWrapper>
                    <PictureBox type="archive" />
                    <Detail>
                        <Title>공강시간에 즐긴 베이킹 클래스</Title>
                        <Hashtag></Hashtag>
                        <Text>
                            베이킹을 처음해보는 거였는데 재밌었고 수업 분위기가
                            좋았다~~
                        </Text>
                    </Detail>
                </ContentWrapper>
            </Container>
        </Wrapper>
    );
};

export default ArchiveDetailPage;

const Wrapper = styled.div`
    position: relative;
`;

const ContentWrapper = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 30px;

    @media (min-width: 1024px) {
        margin-top: 40px;
    }
`;

const Detail = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`;

const Title = styled.div`
    ${InputStyle}

    @media (min-width: 1024px) {
        font-size: 24px;
        margin-bottom: 25px;
    }
`;

const Hashtag = styled.div`
    ${InputStyle}

    @media (min-width: 1024px) {
        margin-bottom: 25px;
    }
`;

const Text = styled.div`
    ${InputStyle}

    @media (min-width: 1024px) {
        font-size: 24px;
    }
`;
