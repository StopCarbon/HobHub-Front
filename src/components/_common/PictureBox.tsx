import styled from 'styled-components';
import { useState } from 'react';

import { ImgStyle } from './commonStyle';

import camera from '../../assets/archive/camera.svg';

const MAX_FILE_SIZE_BYTES = 5 * 1024 * 1024; // 5MB

// 타입, 이미지url, 사진 업로드 함수, 사진 수정 함수를 전달받음
const PictureBox = ({
    type,
    pic,
    setPostImg,
    setEditedImg,
}: {
    type: 'upload' | 'archive';
    pic?: string;
    setPostImg?: (file: File | null) => void;
    setEditedImg?: (file: File | null) => void;
}) => {
    const [previewImg, setPreviewImg]: any = useState(pic); // 이미지 파일의 url -> 미리보기용

    const handleFileUpload = (e: any) => {
        let file = e.target.files[0];

        if (file && file.size > MAX_FILE_SIZE_BYTES) {
            alert('파일 크기가 너무 큽니다. 5MB 이하의 파일을 선택해주세요.');
            return;
        }

        // 업로드 함수를 전달받았을 경우 postImg 변수에 사진 저장
        setPostImg?.(file);
        // 수정 함수를 전달받았을 경우 editedImg 변수에 사진 저장
        setEditedImg?.(file);

        let fileRead = new FileReader();
        fileRead.readAsDataURL(file);

        fileRead.onload = () => {
            setPreviewImg(fileRead.result || null);
        };
    };

    // 취미 아카이브 페이지 -> 업로드한 사진을 볼 수 있는 div
    // 기록 작성 페이지 -> 사진을 업로드할 수 있는 input
    return type == 'archive' ? (
        <Wrapper>
            {pic ? (
                <img className="pic" src={pic} alt="기록" />
            ) : (
                <img className="icon" src={camera} alt="업로드" />
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
margin-bottom: 30px;
overflow: hidden;

display: flex;
align-items: center;
justify-content: center;

.pic {
    ${ImgStyle}
}

.icon {
    width: 20px;
    height: 20px;
}

@media (min-width: 650px) {
    height: 30vw;
    margin-bottom: 20px;
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
