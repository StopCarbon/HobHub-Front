import styled from 'styled-components';
import { useState } from 'react';

const Priority = () => {
    return (
        <Wrapper>
            <Option>비용</Option>
            <Option>소요 시간</Option>
            <Option>거리</Option>
            <Option>위치</Option>
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
    overflow-x: hidden;

    @media (min-width: 650px) {
        width: 80%;
    }
`;

const Option = styled.button`
    padding: 10px 16px;
    border-radius: 20px;
    background-color: var(--blue1);
    border: 1px solid var(--blue4);
    margin: -8px 8px 20px 0;

    font-size: 16px;

    &:hover {
        background-color: var(--blue1);
        cursor: pointer;
        transition: background-color 200ms ease-in-out;
    }
    &:active {
        background-color: var(--blue1);
    }

    @media (min-width: 650px) {
        padding: 8px 10px;
        font-size: 12px;

        &:hover {
            background-color: var(--blue1);
            cursor: pointer;
            transition: background-color 200ms ease-in-out;
        }
    }
`;
