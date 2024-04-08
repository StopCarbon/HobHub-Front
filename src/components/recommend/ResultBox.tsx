import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

// component
import {
    collabHobbyIcons,
    similarityHobbyIcons,
} from 'components/_common/icons';
import { ImgStyle } from 'components/_common/commonStyle';
import AddButton from './AddButton';

const ResultBox = ({
    ranking,
    type,
    detailhobby,
    category,
    similarity,
}: {
    ranking: number;
    type: 'collab' | 'simil';
    detailhobby: string;
    category: string;
    similarity?: number;
}) => {
    // 원데이 클래스 페이지로 이동
    const navigate = useNavigate();
    const handleIconClick = () => {
        navigate(`/onedayclass/${category}/${detailhobby}`);
    };

    return (
        <Wrapper className={`rank${ranking}`}>
            <Ranking className={`rank${ranking}`}>
                <p>{ranking}위</p>
            </Ranking>
            <Text>
                <h1>{detailhobby}</h1>
                <p className="category">{category}</p>
                {similarity && (
                    <>
                        <p className="similarity">유사도 {similarity}%</p>
                        <Graph>
                            <Fill style={{ width: `${similarity}%` }} />
                        </Graph>
                    </>
                )}
                <AddButton detailhobby={detailhobby} />
            </Text>
            <IconCircle className={`rank${ranking}`}>
                <Icon onClick={handleIconClick}>
                    {type == 'collab' ? ( // 협업 필터링 취미 추천 or 유사도 기반 취미 추천
                        <img
                            src={collabHobbyIcons[category][detailhobby]}
                            alt={detailhobby}
                        />
                    ) : (
                        <img
                            src={similarityHobbyIcons[category][detailhobby]}
                            alt={detailhobby}
                        />
                    )}
                </Icon>
            </IconCircle>
        </Wrapper>
    );
};

export default ResultBox;

const Wrapper = styled.section`
    width: 80%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px 18px 20px 50px;
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
    width: 100%;
    margin-right: 20px;

    h1 {
        font-family: nanum-bold;
        font-size: 22px;
        margin-bottom: 7px;
    }
    .category {
        margin-bottom: 15px;
        font-family: nanum-bold;
        font-size: 16px;
        color: rgba(0, 0, 0, 0.6);
    }
    .similarity {
        font-size: 12px;
        margin-bottom: 3px;
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
    flex-shrink: 0;

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

const Graph = styled.div`
    height: 10px;
    display: flex;
    align-items: center;
    overflow: hidden;
    border: 2px solid var(--orange);
    border-radius: 8px;
    margin-bottom: 18px;
`;

const Fill = styled.div`
    height: 8px;
    background-color: #ffd6ff;
    background-image: linear-gradient(to left, #c8b6ff 25%, transparent 100%);
    background-size: cover;
    border-radius: 4px;
    animation-name: slide-active-bar;
    animation-duration: 1500ms;

    @keyframes slide-active-bar {
        0% {
            transform: translate3d(
                -100%,
                0,
                0
            ); // 자신의 길이만큼 왼쪽으로 움직여서 안보이게 됨
        }

        100% {
            transform: translate3d(0, 0, 0); // 원래 자기 위치로 이동
        }
    }
`;
