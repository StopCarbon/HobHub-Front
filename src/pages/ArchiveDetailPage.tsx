import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

// component
import { Container } from 'components/_common/pageLayout';
import { InputStyle } from 'components/_common/commonStyle';
import Navbar from 'components/_common/Navbar';
import Header from 'components/_common/Header';
import PictureBox from 'components/_common/PictureBox';

// asset
import cookie from '../assets/archive/cookie.png';

// api
import { getPostDetail } from 'api/board';

interface PostDetail {
    id: number;
    title: string;
    content: string;
    boardFile?: string;
}

const ArchiveDetailPage = () => {
    // 게시물 상세내용
    const [postDetail, setPostDetail] = useState<PostDetail>();

    // 게시물 id 가져오기
    const { boardId } = useParams();
    const parsedBoardId = Number(boardId);

    // 게시물 상세내용 get api
    useEffect(() => {
        getPostDetail({ board_id: parsedBoardId }).then((res) => {
            console.log(res?.data);
            setPostDetail(res?.data);
        });
    }, []);

    // 수정 모드 관리
    const [isEditing, setIsEditing] = useState(false);

    // 수정한 데이터
    const [editedTitle, setEditedTitle] =
        useState('공강시간에 즐긴 베이킹 클래스');
    const [editedPlace, setEditedPlace] = useState('마포/서대문');
    const [editedContent, setEditedContent] = useState(
        '베이킹을 처음해보는 거였는데 재밌었고 수업 분위기가 좋았다~~',
    );
    const [editedImg, setEditedImg] = useState<File | null>(null);

    // 수정 버튼을 클릭했을 때
    const handleEditClick = () => {
        setIsEditing(true); // 수정 모드로 변경
    };

    // 저장 버튼을 클릭했을 때
    const handleSaveClick = () => {
        // 수정된 데이터 patch api
        const data = {
            title: editedTitle,
            text: editedContent,
        };

        // 수정 모드 종료
        setIsEditing(false);
    };

    return (
        <Wrapper>
            <Navbar />
            <Container>
                <HeaderWrapper>
                    <Header reg="2024.3.15" />
                    {isEditing ? ( // 수정 모드인 경우
                        <EditButton className="edit" onClick={handleSaveClick}>
                            저장하기
                        </EditButton>
                    ) : (
                        // 수정 모드가 아닌 경우
                        <EditButton className="save" onClick={handleEditClick}>
                            수정하기
                        </EditButton>
                    )}
                </HeaderWrapper>
                <ContentWrapper>
                    {isEditing ? ( // 수정 모드인 경우
                        <>
                            <PictureBox
                                type="upload"
                                pic={cookie}
                                setEditedImg={setEditedImg}
                            />
                            <Detail>
                                <TitleInput
                                    value={editedTitle}
                                    onChange={(e) =>
                                        setEditedTitle(e.target.value)
                                    }
                                />
                                <OneDayClassInput
                                    type="text"
                                    value={editedPlace}
                                    onChange={(e) =>
                                        setEditedPlace(e.target.value)
                                    }
                                />
                                <TextInput
                                    value={editedContent}
                                    onChange={(e) =>
                                        setEditedContent(e.target.value)
                                    }
                                />
                            </Detail>
                        </>
                    ) : (
                        // 수정 모드가 아닌 경우
                        <>
                            <PictureBox type="archive" pic={cookie} />
                            <Detail>
                                <Title>{postDetail?.title}</Title>
                                <OneDayClass>
                                    <span className="place">{editedPlace}</span>{' '}
                                    3가지 맛 쿠키 만들기 체험
                                </OneDayClass>
                                <Text>{postDetail?.content}</Text>
                            </Detail>
                        </>
                    )}
                </ContentWrapper>
            </Container>
        </Wrapper>
    );
};

export default ArchiveDetailPage;

const Wrapper = styled.div`
    position: relative;
`;

const HeaderWrapper = styled.div`
    display: flex;
    justify-content: space-between;
`;

const EditButton = styled.button`
    padding: 6px 8px;
    font-size: 18px;
    white-space: nowrap;
    border-radius: 4px;

    &.edit {
        background-color: var(--blue1);
    }
    &.save {
        background-color: var(--blue4);
        color: white;
    }

    @media (min-width: 1024px) {
        font-size: 22px;
        cursor: pointer;
    }
`;

const ContentWrapper = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 30px;

    @media (min-width: 1024px) {
        margin-top: 40px;
    }
`;

const Detail = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`;

const Title = styled.div`
    ${InputStyle}

    @media (min-width: 1024px) {
        font-size: 24px;
        margin-bottom: 25px;
    }
`;

const OneDayClass = styled(Title)`
    .place {
        font-family: 'nanum-bold';
    }
`;

const Hashtag = styled.div`
    ${InputStyle}

    @media (min-width: 1024px) {
        margin-bottom: 25px;
    }
`;

const Text = styled.div`
    ${InputStyle}

    @media (min-width: 1024px) {
        font-size: 24px;
    }
`;

// input 요소로 렌더링
const TitleInput = styled(Title).attrs((input) => ({ as: 'input' }))``;
const TextInput = styled(Text).attrs((input) => ({ as: 'input' }))``;
const OneDayClassInput = styled(OneDayClass).attrs((input) => ({
    as: 'input',
}))``;
