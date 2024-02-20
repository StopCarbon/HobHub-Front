import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    padding: 25px 20px;

    @media (min-width: 1024px) {
        width: calc(960px - var(--sidebar));
        padding: 25px 40px;

        position: absolute;
        left: var(--sidebar);
        margin-top: 20px;
    }
`;
