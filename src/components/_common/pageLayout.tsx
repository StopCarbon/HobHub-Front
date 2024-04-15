import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    padding: 25px 20px;

    @media (min-width: 650px) {
        width: calc(640px - var(--sidebar));
        padding: 15px 20px;

        position: absolute;
        left: var(--sidebar);
    }
`;
