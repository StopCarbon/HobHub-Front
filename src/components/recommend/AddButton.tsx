import styled from 'styled-components';

import { addHobby } from 'api/add';

const AddButton = ({
    category,
    detailhobby,
    percent,
}: {
    category: string;
    detailhobby: string;
    percent: number;
}) => {
    // 서랍장 post api
    const handleButtonClick = () => {
        addHobby(category, detailhobby, percent).then((res) => {
            console.log('hobby: ' + detailhobby);
            console.log('category: ' + category);
            console.log('percent: ' + percent);
        });
    };

    return (
        <Button type="button" onClick={handleButtonClick}>
            서랍장에 추가하기
        </Button>
    );
};

export default AddButton;

const Button = styled.button`
    padding: 6px 10px;
    font-size: 12px;
    color: white;
    white-space: nowrap;
    border-radius: 4px;
    background-color: var(--blue4);

    @media (min-width: 650px) {
        font-size: 10px;

        &:hover {
            cursor: pointer;
            opacity: 0.7;
            transition: opacity 200ms ease-in-out;
        }
    }
`;
