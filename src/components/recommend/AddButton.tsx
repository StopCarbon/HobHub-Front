import styled from 'styled-components';

const AddButton = () => {
    // 서랍장 post api
    const handleButtonClick = () => {};

    return (
        <Button type="button" onClick={handleButtonClick}>
            서랍장에 추가하기
        </Button>
    );
};

export default AddButton;

const Button = styled.button`
    padding: 8px 10px;
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
