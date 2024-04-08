import styled from 'styled-components';
import { useState, FormEvent } from 'react';

// components
import Header from 'components/_common/Header';
import PictureBox from 'components/_common/PictureBox';
import { InputStyle } from 'components/_common/commonStyle';
import { PostDetail } from 'components/_common/props';

// assets
import archive from '../assets/archive/cookie.png';
import camera from '../assets/archive/camera.svg';

// api
import { savePost } from 'api/board';

const CreateForm = ({ hobbyId }: { hobbyId: number }) => {
    // 작성 내용 저장
    const [setting, setSetting] = useState('public');
    const [postImg, setPostImg] = useState<File | null>(null); // 이미지 파일 자체 -> 서버 저장용
    const [title, setTitle] = useState('');
    const [text, setText] = useState('');
    const [oneday, setOneDay] = useState('');

    // 공개 or 비공개 설정
    const handleSettingClick = () => {
        setSetting((prevSetting) =>
            prevSetting === 'public' ? 'private' : 'public',
        );
    };
    const onChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value);
    };
    const onChangeText = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setText(e.target.value);
    };

    // 작성 내용 POST api
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const data = {
            title: title,
            content: text,
            boardFile: null, // 파일
        };
        savePost({ user_id: 1, hobby_id: hobbyId, postInfo: data }).then(
            (res) => {
                console.log(res);
            },
        );
    };

    return (
        <div>
            <HeaderWrapper>
                <Header reg="취미 기록 남기기" />
                <SettingButton onClick={handleSettingClick} className={setting}>
                    {setting === 'public' ? '공개🔓' : '비공개🔒'}
                </SettingButton>
            </HeaderWrapper>
            <Form onSubmit={handleSubmit} encType="multipart/form-data">
                <PictureBox type="upload" setPostImg={setPostImg} />
                <ContentWrapper>
                    <Title
                        placeholder="제목"
                        value={title}
                        onChange={onChangeTitle}
                        required
                    />
                    <Hashtag placeholder="#해시태그를 사용하여 기록해보세요."></Hashtag>
                    <OneDayClass placeholder="원데이 클래스 이름(선택)" />
                    <TextForm
                        placeholder="간단한 글을 남겨보세요."
                        value={text}
                        onChange={onChangeText}
                        wrap="hard"
                    />
                </ContentWrapper>
                <CompleteButton type="submit">완료</CompleteButton>
            </Form>
        </div>
    );
};

export default CreateForm;

const HeaderWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;

    @media (min-width: 1024px) {
        margin-bottom: 30px;
    }
`;

const SettingButton = styled.button`
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

const Form = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const ContentWrapper = styled.section`
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
