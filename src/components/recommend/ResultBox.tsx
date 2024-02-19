import styled from 'styled-components';

import { hobbies } from 'components/_common/hobbies';
import { ImgStyle } from 'components/_common/commonStyle';

const ResultBox = ({
    ranking,
    hobby,
    similarity,
}: {
    ranking: number;
    hobby: string;
    similarity: number;
}) => {
    return (
        <Wrapper className={`rank${ranking}`}>
            <Ranking className={`rank${ranking}`}>
                <p>{ranking}위</p>
            </Ranking>
            <Text>
                <h1>{hobby}</h1>
                <p>유사도 {similarity}%</p>
                <AddButton type="button">서랍장에 추가하기</AddButton>
            </Text>
            <IconCircle className={`rank${ranking}`}>
                <Icon>
                    <img src={hobbies[hobby]} alt={hobby} />
                </Icon>
            </IconCircle>
        </Wrapper>
    );
};

export default ResultBox;

const Wrapper = styled.section`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 15px 16px 15px 50px;
    margin-bottom: 30px;

    border-radius: 8px;
    box-shadow: var(--popup-shadow);
    background-color: var(--blue1);
    position: relative;

    &.rank1 {
        background-color: var(--blue1);
    }
    &.rank2 {
        background-color: var(--blue2);
    }
    &.rank3 {
        background-color: var(--blue3);
    }

    @media (min-width: 1024px) {
        width: 460px;
        padding: 20px 25px 20px 90px;
        margin-bottom: 40px;
    }
`;

const Ranking = styled.div`
    width: 64px;
    height: 52px;
    clip-path: polygon(0 0, 100% 0, 47% 100%, 0% 100%); // 사다리꼴
    box-shadow: var(--popup-shadow);

    position: absolute;
    top: -8px;
    left: -10px;

    p {
        font-family: nanum-bold;
        font-size: 20px;
        margin: 10px 5px;
    }

    &.rank1 {
        background-color: var(--pink);
    }
    &.rank2 {
        background-color: var(--purple1);
    }
    &.rank3 {
        background-color: var(--purple2);
    }

    @media (min-width: 1024px) {
        width: 80px;
        height: 70px;

        p {
            font-family: nanum-bold;
            font-size: 24px;
            margin: 18px 7px;
        }
    }
`;

const Text = styled.div`
    margin-right: 50px;

    h1 {
        font-size: 24px;
    }
    p {
        margin: 15px 0;
        font-size: 18px;
    }

    @media (min-width: 1024px) {
        h1 {
            font-size: 26px;
        }
        p {
            margin: 15px 0;
            font-size: 20px;
        }
    }
`;

const AddButton = styled.button`
    padding: 5px 10px;
    font-size: 12px;
    color: white;
    white-space: nowrap;
    border-radius: 4px;
    background-color: var(--blue4);

    @media (min-width: 1024px) {
        font-size: 15px;

        &:hover {
            cursor: pointer;
            opacity: 0.7;
            transition: opacity 200ms ease-in-out;
        }
    }
`;

const IconCircle = styled.div`
    width: 100px;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;

    border-radius: 50%;
    background-color: var(--pink);
    border: 5px solid var(--orange);
    box-shadow: var(--dropdown-shadow);

    &.rank1 {
        background-color: var(--pink);
    }
    &.rank2 {
        background-color: var(--purple1);
    }
    &.rank3 {
        background-color: var(--purple2);
    }

    @media (min-width: 1024px) {
        width: 120px;
        height: 120px;
        transition: transform 200ms ease-in-out;

        &:hover {
            cursor: pointer;
            transform: rotate(90deg);
        }
    }
`;

const Icon = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-grow: 0.6;

    img {
        ${ImgStyle}
    }
`;
