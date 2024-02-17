import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

import arrow from '../../assets/_common/backarrow.svg';

const Header = ({ bold, reg }: { bold?: string; reg: string }) => {
    const navigate = useNavigate();
    const handleArrowClick = () => {
        navigate(-1);
    };

    return (
        <Wrapper>
            <Icon onClick={handleArrowClick}>
                <img src={arrow} alt="arrow" />
            </Icon>
            <Title>
                <p className="bold">{bold}</p>
                <p>{reg}</p>
            </Title>
        </Wrapper>
    );
};

export default Header;

const Wrapper = styled.div`
    display: flex;
    align-items: center;
`;

const Icon = styled.div`
    @media (min-width: 1024px) {
        cursor: pointer;
        width: 30px;
        height: 18px;

        img {
            width: 100%;
            height: 100%;
        }
    }
`;

const Title = styled.span`
    display: flex;
    font-size: 22px;
    margin-left: 20px;
    white-space: nowrap;

    p {
        font-family: 'nanum-bold';

        &.bold {
            color: var(--blue4);
        }
    }

    @media (min-width: 1024px) {
        font-size: 25px;
        margin-left: 40px;
    }
`;
