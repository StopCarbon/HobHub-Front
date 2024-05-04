import styled from 'styled-components';

const options = ['비용', '소요시간', '거리', '위치'];

const Priority = ({
    setPriority,
}: {
    setPriority: React.Dispatch<React.SetStateAction<string>>;
}) => {
    const handlePriorityClick = (option: string) => {
        setPriority(option);
        console.log('set pri', option);
    };

    return (
        <Wrapper>
            {options.map((option, i) => (
                <Option key={i} onClick={() => handlePriorityClick(option)}>
                    {option}
                </Option>
            ))}
        </Wrapper>
    );
};

export default Priority;

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
    flex-wrap: wrap;

    @media (min-width: 650px) {
        width: 80%;
    }
`;

const Option = styled.button`
    padding: 10px 15px;
    border-radius: 20px;
    background-color: var(--blue1);
    border: 1px solid var(--blue4);
    margin-right: 5px;
    font-size: 16px;

    &:active {
        background-color: var(--blue3);
        color: white;
    }

    @media (min-width: 650px) {
        padding: 8px 10px;
        font-size: 12px;

        &:hover {
            background-color: var(--blue1);
            transition: background-color 200ms ease-in-out;
            cursor: pointer;
        }
    }
`;
