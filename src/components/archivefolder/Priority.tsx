import styled from 'styled-components';
import { useState } from 'react';

const options = ['비용', '소요시간', '거리', '난이도', '목적'];

const Priority = ({
    setPriority,
}: {
    setPriority: React.Dispatch<React.SetStateAction<string>>;
}) => {
    // 현재 선택된 옵션
    const [activeOption, setActiveOption] = useState('');

    const handlePriorityClick = (option: string) => {
        setPriority(option);
        setActiveOption(option);
        console.log('set pri', option);
    };

    return (
        <Wrapper>
            {options.map((option, i) => (
                <Option
                    key={i}
                    onClick={() => handlePriorityClick(option)}
                    style={{
                        backgroundColor:
                            activeOption == option ? 'var(--pink)' : '',
                    }}
                >
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
    flex-wrap: wrap;
`;

const Option = styled.button`
    padding: 10px 15px;
    border-radius: 20px;
    background-color: var(--blue1);
    border: 1px solid var(--blue4);
    margin-right: 5px;
    font-size: 16px;

    @media (min-width: 650px) {
        padding: 8px 10px;
        font-size: 12px;

        &:hover {
            background-color: var(--pink);
            transition: background-color 200ms ease-in-out;
            cursor: pointer;
        }
    }
`;
