import { useState, useEffect } from 'react';
import { FaStar } from 'react-icons/fa';
import styled from 'styled-components';

const arr = [0, 1, 2, 3, 4];

const Rating = ({
    setRating,
}: {
    setRating: React.Dispatch<React.SetStateAction<number>>;
}) => {
    // 눌렸는지 여부
    const [clicked, setClicked] = useState([false, false, false, false, false]);

    const handleStarClick = (idx: number) => {
        let clickStates = [...clicked];
        // 전달받은 숫자 값 보다 작거나 같은 위치에 있는 별만 색칠
        for (let i = 0; i < 5; i++) {
            clickStates[i] = i <= idx ? true : false;
        }
        setClicked(clickStates);
    };

    useEffect(() => {
        let score = clicked.filter(Boolean).length;
        setRating(score); // 별점 set
        console.log('set', score);
    }, [clicked]);

    return (
        <Wrap>
            <Stars>
                {arr.map((el, idx) => {
                    return (
                        <FaStar
                            key={idx}
                            size="35"
                            onClick={() => handleStarClick(el)}
                            className={clicked[el] ? 'filledStar' : ''}
                        />
                    );
                })}
            </Stars>
        </Wrap>
    );
};

export default Rating;

const Wrap = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Stars = styled.div`
    display: flex;
    padding-top: 5px;

    & svg {
        color: gray;
        cursor: pointer;
    }

    :hover svg {
        color: #fee28d;
    }

    & svg:hover ~ svg {
        color: gray;
    }

    .filledStar {
        color: #fee28d;
    }
`;
