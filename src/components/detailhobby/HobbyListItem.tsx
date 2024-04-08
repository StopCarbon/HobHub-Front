import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

import { ImgStyle } from 'components/_common/commonStyle';
import {
    collabHobbyIcons,
    similarityHobbyIcons,
} from 'components/_common/icons';

import arrow from '../../assets/_common/rightarow.png';

// 배경색을 위한 order, 취미 카테고리, 세부 취미 받기
const HobbyListItem = ({
    order,
    category,
    detailhobby,
}: {
    order: number;
    category: string;
    detailhobby: string;
}) => {
    // 파랑1, 파랑2, 파랑3 순으로 배경색 규칙적으로 적용하기
    const remainder = order % 3;
    let orderNum;

    switch (remainder) {
        case 1:
            orderNum = 1;
            break;
        case 2:
            orderNum = 2;
            break;
        case 0:
            orderNum = 3;
            break;
    }

    // 세부 취미 원데이 클래스 목록으로 이동
    const navigate = useNavigate();
    const handleDetailhobbyClick = () => {
        navigate(`/onedayclass/${category}/${detailhobby}`);
    };

    return (
        <Wrapper
            className={`order${orderNum}`}
            onClick={handleDetailhobbyClick}
        >
            <Icon>
                <img
                    src={collabHobbyIcons[category][detailhobby]}
                    alt={detailhobby}
                />
            </Icon>
            <Title>{detailhobby}</Title>
            <Arrow>
                <img src={arrow} alt="이동하기" />
            </Arrow>
        </Wrapper>
    );
};

export default HobbyListItem;

const Wrapper = styled.li`
    display: flex;
    align-items: center;
    padding: 8px 10px;
    margin-bottom: 8px;

    border-radius: 4px;
    background-color: var(--blue1);
    position: relative;

    &.order1 {
        background-color: rgba(238, 245, 255, 0.5);
    }
    &.order2 {
        background-color: rgba(180, 212, 255, 0.5);
    }
    &.order3 {
        background-color: rgba(134, 182, 246, 0.5);
    }

    @media (min-width: 1024px) {
        padding: 10px 15px;
        margin-bottom: 12px;

        &:hover {
            cursor: pointer;
            transform: scale(1.06);
            transition: transform 200ms ease-in-out;
        }
    }
`;

const Icon = styled.div`
    width: 40px;
    height: 40px;
    margin-right: 15px;

    img {
        ${ImgStyle}
    }

    @media (min-width: 1024px) {
        width: 55px;
        height: 55px;
        margin-right: 20px;
    }
`;

const Title = styled.p`
    font-size: 22px;
    color: rgba(0, 0, 0, 0.8);
    white-space: nowrap;

    @media (min-width: 1024px) {
        font-size: 26px;
    }
`;

const Arrow = styled.div`
    width: 30px;
    height: 25px;

    position: absolute;
    right: 8px;

    img {
        ${ImgStyle}
    }

    @media (min-width: 1024px) {
        width: 35px;
        height: 30px;
        right: 15px;
    }
`;
