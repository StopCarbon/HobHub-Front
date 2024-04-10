import styled from 'styled-components';
import { useEffect, useState } from 'react';
import TinySlider from 'tiny-slider-react';
import 'tiny-slider/dist/tiny-slider.css';

import { ImgStyle } from 'components/_common/commonStyle';
import { BoardList } from 'components/_common/props';

import loadingImage from '../../assets/archive/cookie.png';
import cookie from '../../assets/archive/cookie.png';
import cok from '../../assets/archive/cok.png';
import rock from '../../assets/archive/rocks.png';
import cake from '../../assets/archive/cake.png';

const imgs = [cookie, rock, cake, cok];
const settings = {
    lazyload: true,
    controls: false,
    autoplayHoverPause: true,
    autoplayButtonOutput: false,
    mouseDrag: true,
    autoplay: true,
    arrowkeys: true,
    preventScrollOnTouch: true,
    gutter: 4,
    fixedWidth: 180,
    fixedWidthViewport: true,
};

// 일반 글씨, 굵은 글씨
const HobbySection = ({
    reg1,
    bold,
    reg2,
    data,
}: {
    reg1: string;
    bold: string;
    reg2: string;
    data: BoardList[];
}) => {
    return (
        <Wrapper>
            <Title>
                <p>
                    {reg1 + '\u00A0'}
                    <span className="bold">{bold}</span>
                    {reg2}
                </p>
            </Title>
            <SliderWrapper>
                <TinySlider settings={settings}>
                    {data.map((e, index) => (
                        <ImgWrapper key={index}>
                            <img
                                className={`tns-lazy-img`}
                                src={loadingImage}
                                data-src={e}
                            />
                            <Text>
                                <p>{e.title}</p>
                            </Text>
                        </ImgWrapper>
                    ))}
                </TinySlider>
            </SliderWrapper>
        </Wrapper>
    );
};

export default HobbySection;

const Wrapper = styled.section`
    width: 100%;
`;

const Title = styled.header`
    display: flex;
    margin-top: 20px;

    p {
        font-size: 20px;
        white-space: nowrap;
        word-break: keep-all;
        overflow: hidden;
        text-overflow: ellipsis;

        .bold {
            font-family: nanum-bold;
            color: var(--blue4);
        }
    }

    @media (min-width: 1024px) {
        margin-top: 30px;

        p {
            font-size: 24px;
        }
    }
`;
const SliderWrapper = styled.div`
    margin: 0 -20px 20px -20px;

    @media (min-width: 1024px) {
        margin: 0;
        margin-bottom: 25px;
    }
`;

const ImgWrapper = styled.div`
    position: relative;
    height: 125px;
    border-radius: 4px;
    box-shadow: var(--popup-shadow);
    overflow: hidden;

    img {
        ${ImgStyle}
    }

    @media (min-width: 1024px) {
        height: 140px;
        cursor: pointer;

        &:hover {
            transform: scale(1.1);
            transition: transform 200ms ease-in-out;
        }
    }
`;

const Text = styled.div`
    width: 100%;
    padding: 8px 10px;
    font-size: 14px;
    background-color: white;
    position: absolute;
    bottom: 0;

    p {
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }

    @media (min-width: 1024px) {
        font-size: 16px;
    }
`;
