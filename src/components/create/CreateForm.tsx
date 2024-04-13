import styled from 'styled-components';
import { useState, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';

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

// recoil
import { UserInfoAtom } from 'recoil/User';

const CreateForm = ({ hobbyId }: { hobbyId: number }) => {
    const userInfo = useRecoilValue(UserInfoAtom);

    // 작성 내용 저장
    const [setting, setSetting] = useState('공개');
    const [postImg, setPostImg] = useState<File | null>(null); // 이미지 파일 자체 -> 서버 저장용
    const [title, setTitle] = useState('');
    const [text, setText] = useState('');
    const [oneday, setOneDay] = useState('');

    // 공개 or 비공개 설정
    const handleSettingClick = () => {
        setSetting((prevSetting) =>
            prevSetting === '공개' ? '비공개' : '공개',
        );
    };
    const onChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value);
    };
    const onChangeText = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setText(e.target.value);
    };

    const navigate = useNavigate();

    // 작성 내용 POST api
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const data = {
            title: title,
            content: text,
            boardFile: postImg || null, // 파일
            open: setting,
        };
        console.log(postImg);
        savePost({ user_id: 6, hobby_id: hobbyId, postInfo: data }).then(
            (res) => {
                console.log(res);
                navigate(-1);
            },
        );
    };

    return (
        <div>
            <HeaderWrapper>
                <Header reg="취미 기록 남기기" />
                <SettingButton onClick={handleSettingClick} className={setting}>
                    {setting === '공개' ? '공개🔓' : '비공개🔒'}
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
                    {/* <Hashtag placeholder="#해시태그를 사용하여 기록해보세요."></Hashtag> */}
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
`;

const SettingButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 6px 8px;
    background-color: var(--blue1);

    font-size: 18px;
    white-space: nowrap;
    border-radius: 4px;

    &.공개 {
        background-color: var(--blue1);
    }
    &.비공개 {
        background-color: var(--blue4);
        color: white;
    }

    @media (min-width: 650px) {
        font-size: 12px;
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

    @media (min-width: 650px) {
        ::-webkit-input-placeholder {
            /* placeholder 폰트 크기 변경 */
            font-size: 14px;
        }
    }
`;

const Title = styled.input`
    ${InputStyle}

    @media (min-width: 650px) {
        font-size: 14px;
        margin-bottom: 10px;
    }
`;
const OneDayClass = styled(Title)``;

const Hashtag = styled.input`
    ${InputStyle}

    @media (min-width: 650px) {
        font-size: 24px;
        margin-bottom: 20px;
    }
`;

const TextForm = styled.textarea`
    ${InputStyle}
    height:150px;
    margin-bottom: 40px;

    @media (min-width: 650px) {
        font-size: 14px;
        margin-bottom: 20px;
    }
`;

const CompleteButton = styled.button`
    width: 100%;
    padding: 12px 0;
    background-color: var(--blue4);
    color: white;
    font-size: 20px;
    border-radius: 4px;

    @media (min-width: 650px) {
        padding: 10px 0;
        font-size: 15px;
        cursor: pointer;
        &:hover {
            background-color: var(--blue2);
            transition: background-color 300ms ease-in-out;
        }
    }
`;
