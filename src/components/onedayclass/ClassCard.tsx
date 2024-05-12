import styled from 'styled-components';

// component
import { ImgStyle } from 'components/_common/commonStyle';
import { ClassData } from 'components/_common/props';

// asset
import pic from '../../assets/_common/defaultProfile.png';

const ClassCard = ({ classData }: { classData?: ClassData }) => {
    // 난이도별로 태그 색 분류
    let levelTag;
    switch (classData?.level) {
        case '매우쉬움':
            levelTag = 'veryeasy';
            break;
        case '쉬움':
            levelTag = 'easy';
            break;
        case '보통':
            levelTag = 'normal';
            break;
        default: // 미정인 경우
            levelTag = 'none';
    }

    // 소요시간별로 태그 색 분류
    let timeTag;
    const total = classData?.total_time;
    if (total !== undefined) {
        switch (true) {
            case total === 0: // 미정인 경우
                timeTag = 'none';
                break;
            case total === 1440: // 24시간 이상
                timeTag = 'allday';
                break;
            case total <= 60: // ~1시간
                timeTag = 'short';
                break;
            case total > 60 && total < 120: // 1시간 ~ 2시간
                timeTag = 'med';
                break;
            case total >= 120: // 2시간 이상
                timeTag = 'long';
                break;
            default:
                timeTag = 'none';
        }
    }

    // 클릭시 해당 원데이 클래스 링크로 이동
    return (
        <Wrapper>
            <Picture href={classData?.link}>
                {classData?.picture ? (
                    <img src={classData?.picture} alt="pic" />
                ) : (
                    <img src={pic} alt="pic" />
                )}
            </Picture>
            <Detail>
                <Place>{classData?.location}</Place>
                <Title>{classData?.title}</Title>
                <Price>{classData?.price}</Price>
                <Border />
                <DetailTag className={`time ${timeTag}`}>
                    <p>
                        {classData?.total_time === 0
                            ? '미정'
                            : classData?.total_time + '분'}
                    </p>
                </DetailTag>
                <DetailTag className={`level ${levelTag}`}>
                    <p>{classData?.level === '' ? '미정' : classData?.level}</p>
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

const Picture = styled.a`
    display: block;
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
    padding: 5px 8px;
    font-size: 16px;

    &.time {
        margin-bottom: 5px;
    }

    // 난이도별로 태그 색 분류
    &.veryeasy {
        background-color: var(--blue1);
    }
    &.easy {
        background-color: var(--blue2);
    }
    &.normal {
        background-color: var(--blue3);
    }

    // 소요시간별로 태그 색 분류
    &.short {
        background-color: var(--pink);
    }
    &.med {
        background-color: var(--purple1);
    }
    &.long {
        background-color: var(--purple2);
    }
    &.allday {
        background-color: var(--grey);
    }

    // 미정인 경우
    &.none {
        background-color: var(--grey);
    }

    @media (min-width: 1024px) {
        font-size: 18px;
    }
`;
