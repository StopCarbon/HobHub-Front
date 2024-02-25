import styled from 'styled-components';
import { useState } from 'react';

import { ImgStyle } from './commonStyle';

import camera from '../../assets/archive/camera.svg';

const MAX_FILE_SIZE_BYTES = 5 * 1024 * 1024; // 5MB

const PictureBox = ({
    type,
    pic,
}: {
    type: 'upload' | 'archive';
    pic?: string;
}) => {
    const [postImg, setPostImg] = useState(null); // 이미지 파일 자체 -> 서버 저장용
    const [previewImg, setPreviewImg]: any = useState(null); // 이미지 파일의 url -> 미리보기용

    const handleFileUpload = (e: any) => {
        let file = e.target.files[0];

        if (file && file.size > MAX_FILE_SIZE_BYTES) {
            alert('파일 크기가 너무 큽니다. 5MB 이하의 파일을 선택해주세요.');
            return;
        }

        setPostImg(file);

        let fileRead = new FileReader();
        fileRead.readAsDataURL(file);

        fileRead.onload = () => {
            setPreviewImg(fileRead.result || null);
        };
    };

    // 기록 작성 페이지 -> 사진을 업로드할 수 있는 input
    // 취미 아카이브 페이지 -> 업로드한 사진을 볼 수 있는 div
    return type == 'archive' ? (
        <Wrapper>
            {pic ? (
                <img className="pic" src={pic} alt="기록" />
            ) : (
                <img className="icon" src={camera} alt="사진 없음" />
            )}
        </Wrapper>
    ) : (
        <>
            <UploadLabel htmlFor="photo">
                {previewImg ? (
                    <img className="pic" src={previewImg} alt="미리보기" />
                ) : (
                    <img className="icon" src={camera} alt="이미지 업로드" />
                )}
            </UploadLabel>
            <FileUpload
                type="file"
                id="photo"
                name="photo"
                accept="image/*"
                onChange={handleFileUpload}
            />
        </>
    );
};

export default PictureBox;

const boxStyle = `
width: 100%;
height: 50vw;
background-color: var(--blue1);
border-radius: 4px;
box-shadow: var(--dropdown-shadow);
margin-bottom: 30px;
overflow: hidden;

display: flex;
align-items: center;
justify-content: center;

.pic {
    ${ImgStyle}
}

.icon {
    width: 30px;
    height: 30px;
}

@media (min-width: 1024px) {
    width: 480px;
    height: 350px;
    margin-bottom: 40px;
    cursor: pointer;
}
`;

const Wrapper = styled.div`
    ${boxStyle}
`;

const FileUpload = styled.input`
    display: none;
`;

const UploadLabel = styled.label`
    ${boxStyle}
`;
