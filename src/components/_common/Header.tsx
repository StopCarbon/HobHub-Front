import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

import arrow from '../../assets/_common/backarrow.svg';

// 굵은 글씨, 일반 글씨 나눠서 받기
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

const Icon = styled.a`
    @media (min-width: 1024px) {
        width: 30px;
        height: 18px;
        display: block;
        padding: 10px; // hover 영역 확장
        cursor: pointer;

        img {
            width: 100%;
            height: 100%;
        }

        &:hover {
            opacity: 0.6;
            transition: opacity 200ms ease-in-out;
        }
    }
`;

const Title = styled.span`
    display: flex;
    font-size: 22px;
    margin-left: 25px;
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
