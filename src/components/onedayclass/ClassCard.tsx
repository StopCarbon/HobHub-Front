import styled from 'styled-components';

import { ImgStyle } from 'components/_common/commonStyle';

import pic from '../../assets/archive/cookie.png';

const ClassCard = () => {
    // 해당 원데이 클래스 링크로 이동
    const handleOnedayclassClick = () => {};

    return (
        <Wrapper>
            <Picture onClick={handleOnedayclassClick}>
                <img src={pic} alt="pic" />
            </Picture>
            <Detail>
                <Place>마포/서대문</Place>
                <Title>
                    3가지 맛 스콘 만들기 체험 3가지 맛 스콘 만들기 체험 3가지 맛
                    스콘 만들기 체험 3가지 맛 스콘 만들기 체험
                </Title>
                <Price>55,000원</Price>
                <Border />
                <DetailTag className="time">
                    <p>약 1시간 30분</p>
                </DetailTag>
                <DetailTag className="level">
                    <p>난이도 중</p>
                </DetailTag>
            </Detail>
        </Wrapper>
    );
};

export default ClassCard;

const Wrapper = styled.section`
    display: flex;
    flex-direction: column;
    width: calc(50% - 8px); // 한 줄에 두개의 카드를 8px 간격으로 배치
    margin-bottom: 20px;

    @media (min-width: 1024px) {
        width: calc(33.333% - 11px); // (100% - 32px) / 3
        margin-bottom: 25px;
    }
`;

const Picture = styled.div`
    position: relative;
    width: 100%;
    height: 0;
    padding-bottom: 90%; // 사진의 높이를 너비의 90%로 유지
    border-radius: 4px;
    overflow: hidden;

    img {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        ${ImgStyle}
    }

    @media (min-width: 1024px) {
        cursor: pointer;

        &:hover {
            transform: scale(1.1);
            transition: transform 200ms ease-in-out;
        }
    }
`;

const Detail = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    font-size: 18px;

    @media (min-width: 1024px) {
        font-size: 20px;
    }
`;

const Place = styled.p`
    font-family: nanum-bold;
    font-size: 13px;
    color: rgba(0, 0, 0, 0.6);
    margin: 10px 0 5px 0;

    @media (min-width: 1024px) {
        font-size: 16px;
    }
`;

const Title = styled.h1`
    display: -webkit-box;
    -webkit-line-clamp: 2; // 최대 두줄로 유지
    -webkit-box-orient: vertical;
    overflow: hidden;
    margin-bottom: 8px;

    @media (min-width: 1024px) {
        -webkit-line-clamp: 3;
        margin-bottom: 10px;
    }
`;

const Price = styled.p`
    font-family: gmarket-reg;
`;

const Border = styled.div`
    width: 100%;
    height: 0;
    border-bottom: solid 1px #e0e2e7;
    margin: 5px 0 8px 0;

    @media (min-width: 1024px) {
        margin: 8px 0 10px 0;
    }
`;

const DetailTag = styled.div`
    background-color: var(--blue2);
    border-radius: 4px;
    padding: 5px 10px;
    font-size: 16px;

    &.time {
        margin-bottom: 5px;
    }

    @media (min-width: 1024px) {
        font-size: 18px;
    }
`;
