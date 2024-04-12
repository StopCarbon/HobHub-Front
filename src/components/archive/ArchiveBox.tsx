import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

import { ImgStyle } from 'components/_common/commonStyle';

import pic from '../../assets/archive/cookie.png';

const ArchiveBox = ({
    boardId,
    title,
    image,
}: {
    boardId: number;
    title: string;
    image?: string;
}) => {
    const navigate = useNavigate();

    const handleBoxClick = () => {
        navigate(`/archivedetail/${boardId}`);
    };

    return (
        <Wrapper onClick={handleBoxClick}>
            <Picture>
                <img src={image} alt="picture" />
            </Picture>
            <Text>
                <p>{title}</p>
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

    @media (min-width: 650px) {
        min-width: 0;
        width: 180px; // width 고정
        height: 140px;
        margin-right: 20px;
        margin-bottom: 20px;
        cursor: pointer;

        &:hover {
            opacity: 0.7;
            transition: opacity 200ms ease-in-out;
        }
    }
`;

const Picture = styled.figure`
    img {
        ${ImgStyle}
    }
`;

const Text = styled.figcaption`
    width: 100%;
    background-color: white;
    font-size: 14px;
    padding: 12px 10px;

    position: absolute; // 사진 위에 오도록 배치
    bottom: -4px;

    p {
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }

    @media (min-width: 650px) {
        font-size: 13px;
    }
`;
