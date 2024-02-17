import styled from 'styled-components';

export const Container = styled.div`
    padding: 25px 20px;
    display: flex;
    flex-direction: column;

    @media (min-width: 1024px) {
        padding: 0;
        position: absolute;
        left: calc(var(--sidebar) + 30px);
        margin-top: 40px;
    }
`;
