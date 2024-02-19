import styled from 'styled-components';

export const Container = styled.div`
    padding: 25px 15px;
    display: flex;
    flex-direction: column;

    @media (min-width: 1024px) {
        width: calc(960px - var(--sidebar));
        padding: 25px 40px;

        position: absolute;
        left: var(--sidebar);
        margin-top: 20px;
    }
`;
