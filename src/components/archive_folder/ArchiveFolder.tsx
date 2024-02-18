import styled from 'styled-components';

import { hobbies } from 'components/_common/hobbies';

const ArchiveFolder = ({ order, hobby }: { order: number; hobby: string }) => {
    const remainder = order % 3;
    let orderNum;

    // 핑크, 보라1, 보라2 순으로 배경색 규칙적으로 적용하기
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

    return (
        <Wrapper className={`order${orderNum}`}>
            <Badge>3</Badge>
            <Icon>
                <img src={hobbies[hobby]} alt="hobby" />
            </Icon>
            <Title>{hobby}</Title>
        </Wrapper>
    );
};

export default ArchiveFolder;

const Wrapper = styled.section`
    width: 160px;
    height: 160px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: var(--pink);
    border-radius: 8px;
    box-shadow: var(--dropdown-shadow);
    position: relative;
    margin-bottom: 20px;

    &.order1 {
        background-color: var(--pink);
    }
    &.order2 {
        background-color: var(--purple1);
    }
    &.order3 {
        background-color: var(--purple2);
    }

    @media (min-width: 1024px) {
        width: 215px;
        height: 215px;
        margin-bottom: 30px;
        cursor: pointer;

        &:hover {
            opacity: 0.7;
            transition: opacity 200ms ease-in-out;
        }
    }
`;

const Badge = styled.span`
    height: 25px;
    min-width: 25px;
    display: flex;
    align-items: center;
    justify-content: center;

    padding: 0 2px;
    border-radius: calc(25px / 2);
    color: white;
    font-size: 14px;
    font-family: nanum-bold;
    background-color: var(--blue4);

    position: absolute;
    top: 5px;
    right: 5px;

    @media (min-width: 1024px) {
        height: 30px;
        min-width: 30px;
        border-radius: calc(30px / 2);
        font-size: 17px;

        &:hover {
            transform: rotate(-90deg);
            transition: transform 200ms ease-in-out;
        }
    }
`;

const Icon = styled.div`
    margin-bottom: 20px;
    flex-grow: 0.3;

    img {
        display: block;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;

const Title = styled.h1`
    font-size: 20px;

    @media (min-width: 1024px) {
        font-size: 24px;
    }
`;
