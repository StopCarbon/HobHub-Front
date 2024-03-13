import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

import { hobbyIcons } from 'components/_common/icons';
import { ImgStyle } from 'components/_common/commonStyle';
import AddButton from './AddButton';

const DetailResultBox = ({
    ranking,
    detailhobby,
    category,
}: {
    ranking: number;
    detailhobby: string;
    category: string;
}) => {
    // 원데이 클래스 페이지로 이동
    const navigate = useNavigate();
    const handleIconClick = () => {
        navigate(`/onedayclass/${category}/${detailhobby}`);
    };

    // todo : detail hobby icons 로 바꾸기
    return (
        <Wrapper className={`rank${ranking}`}>
            <Ranking className={`rank${ranking}`}>
                <p>{ranking}위</p>
            </Ranking>
            <Text>
                <h1>{detailhobby}</h1>
                <p>{category}</p>
                <AddButton />
            </Text>
            <IconCircle className={`rank${ranking}`}>
                <Icon onClick={handleIconClick}>
                    <img src={hobbyIcons[category]} alt={category} />
                </Icon>
            </IconCircle>
        </Wrapper>
    );
};

export default DetailResultBox;

const Wrapper = styled.section`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 15px 18px 18px 50px;
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
        font-family: nanum-bold;
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

const IconCircle = styled.div`
    width: 100px;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5px;

    border-radius: 50%;
    background-color: var(--pink);
    border: 5px solid var(--orange);
    overflow: hidden;
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

    img {
        ${ImgStyle}
    }
`;
