import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

// component
import { Container } from 'components/_common/pageLayout';
import { InputStyle } from 'components/_common/commonStyle';
import Navbar from 'components/_common/Navbar';
import Header from 'components/_common/Header';
import PictureBox from 'components/_common/PictureBox';
import { PostDetail } from 'components/_common/props';
import AlertTitle from 'components/_common/AlertTitle';

// asset
import def from '../assets/_common/defaultProfile.png';

// api
import { getPostDetail, deletePost } from 'api/board';

const ArchiveDetailPage = () => {
    // 게시물 상세내용
    const [postDetail, setPostDetail] = useState<PostDetail>();
    // 날짜 형식 변환
    const [postDate, setPostDate] = useState('');

    // 게시물 id 가져오기
    const { boardId } = useParams();
    const parsedBoardId = Number(boardId);

    // 게시물 상세내용 get api
    useEffect(() => {
        getPostDetail({ board_id: parsedBoardId }).then((res) => {
            console.log(res?.data);
            setPostDetail(res?.data);
            // 날짜 형식 변환
            if (res?.data.boardCreatedTime) {
                const dateObject = new Date(res.data.boardCreatedTime);
                const formattedDate = `${dateObject.getFullYear()}.${(
                    dateObject.getMonth() + 1
                )
                    .toString()
                    .padStart(2, '0')}.${dateObject
                    .getDate()
                    .toString()
                    .padStart(2, '0')}`;
                setPostDate(formattedDate);
            }
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

    const navigate = useNavigate();

    // 삭제 버튼을 클릭했을 때
    const handleDeleteClick = () => {
        deletePost({ board_id: parsedBoardId }).then((res) => {
            console.log(res?.data);
        });

        withReactContent(Swal).fire({
            icon: 'success',
            title: <AlertTitle text={'성공적으로 삭제되었습니다.'} />,
            showConfirmButton: false,
            timer: 2000,
        });

        setTimeout(() => {
            navigate(-1);
        }, 2000); // 2초 후에 이전 페이지로 이동
    };

    return (
        <Wrapper>
            <Navbar />
            <Container>
                <HeaderWrapper>
                    <Header reg={postDate} />
                    {isEditing ? ( // 수정 모드인 경우
                        <Button className="edit" onClick={handleSaveClick}>
                            저장
                        </Button>
                    ) : (
                        // 수정 모드가 아닌 경우
                        <ButtonWrapper>
                            <Button className="save" onClick={handleEditClick}>
                                수정
                            </Button>
                            <Button
                                className="delete"
                                onClick={handleDeleteClick}
                            >
                                삭제
                            </Button>
                        </ButtonWrapper>
                    )}
                </HeaderWrapper>
                <ContentWrapper>
                    {isEditing ? ( // 수정 모드인 경우
                        <>
                            <PictureBox
                                type="upload"
                                pic={def}
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
                            <PictureBox
                                type="archive"
                                pic={postDetail?.storedFileName}
                            />
                            <Detail>
                                <Title>{postDetail?.title}</Title>
                                {/* <OneDayClass>
                                    <span className="place">{editedPlace}</span>{' '}
                                    3가지 맛 쿠키 만들기 체험
                                </OneDayClass> */}
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
    align-items: center;
`;

const ButtonWrapper = styled.div`
    display: flex;
`;

const Button = styled.button`
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
    &.delete {
        background-color: var(--blue2);
        margin-left: 5px;
    }

    @media (min-width: 650px) {
        font-size: 12px;
        cursor: pointer;
    }
`;

const ContentWrapper = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 30px;

    @media (min-width: 650px) {
        margin-top: 20px;
    }
`;

const Detail = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`;

const Title = styled.div`
    ${InputStyle}

    @media (min-width: 650px) {
        font-size: 14px;
        margin-bottom: 10px;
    }
`;

const OneDayClass = styled(Title)`
    .place {
        font-family: 'nanum-bold';
    }
`;

const Hashtag = styled.div`
    ${InputStyle}

    @media (min-width: 650px) {
        margin-bottom: 20px;
    }
`;

const Text = styled.div`
    ${InputStyle}

    @media (min-width: 650px) {
        font-size: 14px;
    }
`;

// input 요소로 렌더링
const TitleInput = styled(Title).attrs((input) => ({ as: 'input' }))``;
const TextInput = styled(Text).attrs((input) => ({ as: 'input' }))``;
const OneDayClassInput = styled(OneDayClass).attrs((input) => ({
    as: 'input',
}))``;
