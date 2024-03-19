import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

import AddButton from './AddButton';
import { hobbyIcons } from 'components/_common/icons';

const CategoryResultBox = ({
    category,
    similarity,
}: {
    category: string;
    similarity: number;
}) => {
    // 세부 취미 리스트로 이동
    const navigate = useNavigate();
    const handleCategoryClick = () => {
        navigate(`/detailhobby/${category}`); // 한국말
    };

    return (
        <Wrapper>
            <Icon onClick={handleCategoryClick}>
                <img src={hobbyIcons[category]} alt="category" />
            </Icon>
            <Text>
                <h1>{category}</h1>
                <p>유사도 {similarity}%</p>
                <Graph>
                    <Fill style={{ width: `${similarity}%` }} />
                </Graph>
                <AddButton />
            </Text>
        </Wrapper>
    );
};

export default CategoryResultBox;

const Wrapper = styled.div`
    width: 100%;
    padding: 30px 0;
    display: flex;
    flex-direction: column;
    align-items: center;

    border-radius: 8px;
    box-shadow: var(--popup-shadow);
    background-color: var(--blue1);

    @media (min-width: 1024px) {
        width: 80%;
        padding: 20px 0;

        &:hover {
            background-color: var(--pink);
            transition: background-color 200ms ease-in-out;
            cursor: pointer;
        }
    }
`;

const Icon = styled.div`
    width: 120px;
    height: 120px;
    margin-bottom: 10px;

    img {
        display: block;
        width: 100%;
        height: 100%;
        object-fit: contain;
    }

    @media (min-width: 1024px) {
        width: 140px;
        height: 140px;
    }
`;

const Text = styled.p`
    display: flex;
    flex-direction: column;
    align-items: center;

    h1 {
        font-family: 'nanum-bold';
        font-size: 24px;
        margin-bottom: 10px;
    }

    p {
        font-size: 18px;
        margin-bottom: 8px;
    }

    @media (min-width: 1024px) {
        h1 {
            font-size: 26px;
        }
        p {
            font-size: 20px;
        }
    }
`;

const Graph = styled.div`
    width: 280px;
    height: 10px;
    display: flex;
    align-items: center;
    overflow: hidden;
    border: 1px solid var(--blue2);
    border-radius: 4px;
    margin-bottom: 25px;
`;

const Fill = styled.div`
    height: 8px;
    background-color: var(--pink);
    background-image: linear-gradient(
        to left,
        var(--blue2) 0%,
        transparent 100%
    );
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
