import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

import arrow from '../../assets/_common/backarrow.svg';

// 굵은 글씨, 일반 글씨 나눠서 받기
const Header = ({
    bold,
    reg,
    type,
}: {
    bold?: string;
    reg: string;
    type?: string;
}) => {
    const navigate = useNavigate();
    const handleArrowClick = () => {
        navigate(-1);
    };

    return (
        <Wrapper>
            <Icon onClick={handleArrowClick} className={type}>
                <img src={arrow} alt="arrow" />
            </Icon>
            <Title className={type}>
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
    // 메인 페이지
    &.noArrow {
        display: none;
    }

    @media (min-width: 650px) {
        width: 20px;
        height: 15px;
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
    line-height: 30px;
    margin-left: 25px;
    white-space: nowrap;

    // 메인 페이지
    &.noArrow {
        white-space: wrap;
        word-break: keep-all;
        margin-left: 0px;
    }

    p {
        font-family: 'nanum-bold';

        &.bold {
            color: var(--blue4);
        }
    }

    @media (min-width: 650px) {
        font-size: 18px;
        margin-left: 10px;
    }
`;
