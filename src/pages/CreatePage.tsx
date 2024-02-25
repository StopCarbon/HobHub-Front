import styled from 'styled-components';
import { useState } from 'react';

import { Container } from 'components/_common/pageLayout';
import Navbar from 'components/_common/Navbar';
import Header from 'components/_common/Header';
import PictureBox from 'components/_common/PictureBox';
import { InputStyle, ImgStyle } from 'components/_common/commonStyle';

import archive from '../assets/archive/cookie.png';
import camera from '../assets/archive/camera.svg';

const CreatePage = () => {
    const [setting, setSetting] = useState('public');

    const handleSettingClick = () => {
        setSetting((prevSetting) =>
            prevSetting === 'public' ? 'private' : 'public',
        );
    };

    return (
        <Wrapper>
            <Navbar />
            <Container>
                <HeaderWrapper>
                    <Header reg="취미 기록 남기기" />
                    <Settings onClick={handleSettingClick} className={setting}>
                        {setting === 'public' ? '공개🔓' : '비공개🔒'}
                    </Settings>
                </HeaderWrapper>
                <ContentWrapper>
                    <PictureBox type="upload" />
                    <Form>
                        <Title placeholder="제목" />
                        <Hashtag placeholder="#해시태그를 사용하여 기록해보세요."></Hashtag>
                        <OneDayClass placeholder="원데이 클래스 이름(선택)" />
                        <TextForm placeholder="간단한 글을 남겨보세요." />
                    </Form>
                </ContentWrapper>
                <CompleteButton type="submit">완료</CompleteButton>
            </Container>
        </Wrapper>
    );
};

export default CreatePage;

const Wrapper = styled.div`
    position: relative;
`;

const HeaderWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;

    @media (min-width: 1024px) {
        margin-bottom: 30px;
    }
`;

const Settings = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 6px 8px;

    font-size: 18px;
    white-space: nowrap;
    border-radius: 4px;

    &.public {
        background-color: var(--blue1);
    }
    &.private {
        background-color: var(--blue4);
        color: white;
    }

    @media (min-width: 1024px) {
        font-size: 22px;
        cursor: pointer;
    }
`;

const ContentWrapper = styled.section`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Form = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 0 20px;

    ::-webkit-input-placeholder {
        /* placeholder 폰트 크기 변경 */
        font-size: 18px;
    }

    @media (min-width: 1024px) {
        ::-webkit-input-placeholder {
            /* placeholder 폰트 크기 변경 */
            font-size: 24px;
        }
    }
`;

const Title = styled.input`
    ${InputStyle}

    @media (min-width: 1024px) {
        font-size: 24px;
        margin-bottom: 25px;
    }
`;
const OneDayClass = styled(Title)``;

const Hashtag = styled.input`
    ${InputStyle}
    @media (min-width: 1024px) {
        font-size: 24px;
        margin-bottom: 25px;
    }
`;

const TextForm = styled.textarea`
    ${InputStyle}
    height:150px;
    margin-bottom: 40px;
    @media (min-width: 1024px) {
        font-size: 24px;
        margin-bottom: 50px;
    }
`;

const CompleteButton = styled.button`
    width: 100%;
    padding: 12px 0;
    background-color: var(--blue4);
    color: white;
    font-size: 20px;
    border-radius: 4px;

    @media (min-width: 1024px) {
        padding: 15px 0;
        font-size: 22px;
        cursor: pointer;
        &:hover {
            background-color: var(--blue2);
            transition: background-color 300ms ease-in-out;
        }
    }
`;
