import styled from 'styled-components';

import { ImgStyle } from './commonStyle';

import camera from '../../assets/archive/camera.svg';

const PictureBox = ({ pic }: { pic?: string }) => {
    return (
        <Wrapper>
            {pic ? (
                <img className="pic" src={pic} alt="picture" />
            ) : (
                <img className="icon" src={camera} alt="picture" />
            )}
        </Wrapper>
    );
};

export default PictureBox;

const Wrapper = styled.div`
    width: calc(100% - 120px);
    height: 40vw;
    background-color: var(--blue1);
    border-radius: 4px;
    box-shadow: var(--dropdown-shadow);
    margin-bottom: 30px;
    overflow: hidden;

    display: flex;
    align-items: center;
    justify-content: center;

    .icon {
        width: 30px;
        height: 30px;
    }

    .pic {
        ${ImgStyle}
    }

    @media (min-width: 1024px) {
        width: 300px;
        height: 220px;
        margin-bottom: 40px;
        cursor: pointer;
    }
`;
