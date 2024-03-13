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
        margin-bottom: 20px;
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
