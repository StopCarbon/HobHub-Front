import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

import pic from '../../assets/archive/cookie.png';
import { ImgStyle } from 'components/_common/commonStyle';

const ArchiveBox = () => {
    const navigate = useNavigate();

    const handleBoxClick = () => {
        navigate('/archivedetail');
    };

    return (
        <Wrapper onClick={handleBoxClick}>
            <Picture>
                <img src={pic} alt="picture" />
            </Picture>
            <Text>
                <p>공강시간에 즐긴 베이킹 클래스크래스클래스캐스</p>
            </Text>
        </Wrapper>
    );
};

export default ArchiveBox;

const Wrapper = styled.section`
    min-width: 40vw; // 하나만 있을 때 조금 더 커지도록
    height: 128px;
    display: flex;
    flex-direction: column;
    border-radius: 4px;
    overflow: hidden;
    box-shadow: var(--dropdown-shadow);
    margin-bottom: 20px;
    position: relative;

    @media (min-width: 1024px) {
        min-width: 0;
        width: 250px; // width 고정
        height: 180px;
        margin-right: 40px;
        margin-bottom: 30px;
        cursor: pointer;

        &:hover {
            opacity: 0.7;
            transition: opacity 200ms ease-in-out;
        }
    }
`;

const Picture = styled.div`
    img {
        ${ImgStyle}
    }
`;

const Text = styled.div`
    width: 100%;
    background-color: white;
    font-size: 14px;
    padding: 12px 10px;

    position: absolute; // 사진 위에 오도록 배치
    bottom: -4px;

    p {
        white-space: nowrap;
        text-overflow: ellipsis;
    }
`;
