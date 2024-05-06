import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

// component
import { hobbyIcons } from 'components/_common/icons';
import { ImgStyle } from 'components/_common/commonStyle';
import Rating from './Rating';
import Priority from './Priority';
import { UserAtom } from 'recoil/User';

// api
import { postRating } from 'api/rating';

const ArchiveFolder = ({
    hobbyId,
    order,
    category,
    hobby,
}: {
    hobbyId: number;
    order: number;
    category: string;
    hobby: string;
}) => {
    // 사용자 id 가져오기
    const userInfo = useRecoilValue(UserAtom);

    const remainder = order % 3;
    let orderNum;

    // 핑크, 보라1, 보라2 순으로 배경색 규칙적으로 적용하기
    switch (remainder) {
        case 1:
            orderNum = 1;
            break;
        case 2:
            orderNum = 2;
            break;
        case 0:
            orderNum = 3;
            break;
    }

    // 별점
    const [rating, setRating] = useState(0);
    // 별점 매기기 완료 여부
    const [ratingShow, setRatingShow] = useState(false);
    // 중요 요소
    const [priority, setPriority] = useState('');
    // 중요 요소 선택 완료 여부
    const [priorityShow, setPriorityShow] = useState(false);

    // 피드백 완료창
    const showSuccessFeedback = () => {
        withReactContent(Swal).fire({
            icon: 'success',
            title: (
                <AlertTitle>
                    소중한 피드백 감사드립니다! 잘 반영하여 다음에는 더욱 잘
                    맞는 취미를 추천해드리겠습니다!
                </AlertTitle>
            ),
            showConfirmButton: false,
            timer: 2000,
        });
    };

    // 중요 요소 선택창
    const askForPriority = () => {
        withReactContent(Swal)
            .fire({
                title: (
                    <AlertTitle>
                        취미를 선택할 때 있어서 중요하게 생각하는 점을
                        선택해주세요!
                    </AlertTitle>
                ),
                html: <Priority setPriority={setPriority} />,
                confirmButtonColor: `var(--blue4)`,
                confirmButtonText: <OptionButton>완료</OptionButton>,
            })
            .then((res) => {
                if (res.isConfirmed) {
                    setPriorityShow(true);
                    setRatingShow(false);

                    setTimeout(() => {
                        showSuccessFeedback();
                    }, 1000);
                }
            });
    };

    // 1. rating 상태가 변경될 때 실행, 처음(별점이 매겨지기 전)에는 실행 X
    useEffect(() => {
        if (rating > 0) {
            // 별점 POST api
            postRating({
                hobby_id: hobbyId,
                user_id: userInfo.id,
                grade: rating,
            }).then((res) => {
                console.log(res);
            });
            console.log('post rating', rating);
        }
    }, [rating]);

    // 2. rating이 완료 됐을 때 실행
    useEffect(() => {
        if (ratingShow) {
            setTimeout(() => {
                if (rating >= 3) {
                    showSuccessFeedback();
                } else if (rating === 1 || rating === 2) {
                    // 별점이 2 이하면 추가 작업 수행
                    askForPriority();
                }
            }, 1000);
        }
    }, [ratingShow]);

    // 3. 중요 요소 선택이 완료 됐을 때 실행
    useEffect(() => {
        if (priority !== '') {
            console.log('post pri', priority);
            // 우선 순위 post api
        }
    }, [priorityShow]);

    // 기록 페이지로 이동
    const navigate = useNavigate();

    const handleFolderClick = () => {
        withReactContent(Swal)
            .fire({
                icon: 'question',
                title: <AlertTitle>원하시는 활동을 선택해주세요!</AlertTitle>,
                showCancelButton: true,
                confirmButtonColor: `var(--blue4)`,
                cancelButtonColor: `var(--pink)`,
                confirmButtonText: <OptionButton>기록 남기기</OptionButton>,
                cancelButtonText: (
                    <OptionButton className="black">피드백 남기기</OptionButton>
                ),
            })
            .then((result) => {
                if (result.isConfirmed) {
                    // 기록 남기기
                    navigate(`/archive/${hobby}/${hobbyId}`);
                } else if (result.isDismissed) {
                    // 피드백 하기
                    withReactContent(Swal)
                        .fire({
                            title: (
                                <AlertTitle>
                                    취미에 대한 별점을 남겨주세요!
                                </AlertTitle>
                            ),
                            html: <Rating setRating={setRating} />,
                            confirmButtonColor: `var(--blue4)`,
                            confirmButtonText: (
                                <OptionButton>완료</OptionButton>
                            ),
                        })
                        .then((feedbackResult) => {
                            if (feedbackResult.isConfirmed) {
                                setRatingShow(true);
                            }
                        });
                }
            });
    };

    return (
        <Wrapper className={`order${orderNum}`} onClick={handleFolderClick}>
            <Badge>3</Badge>
            <Icon>
                <img src={hobbyIcons[category][hobby]} alt="hobby" />
            </Icon>
            <Title>{hobby}</Title>
        </Wrapper>
    );
};

export default ArchiveFolder;

const Wrapper = styled.section`
    width: 160px;
    height: 160px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: var(--pink);
    border-radius: 8px;
    box-shadow: var(--dropdown-shadow);
    position: relative;
    margin-bottom: 20px;

    &.order1 {
        background-color: var(--pink);
    }
    &.order2 {
        background-color: var(--purple1);
    }
    &.order3 {
        background-color: var(--purple2);
    }

    @media (min-width: 650px) {
        width: 150px;
        height: 150px;
        margin-right: 30px;
        margin-bottom: 30px;
        cursor: pointer;

        &:hover {
            opacity: 0.7;
            transition: opacity 200ms ease-in-out;
        }
    }
`;

const Badge = styled.span`
    height: 25px;
    min-width: 25px;
    display: flex;
    align-items: center;
    justify-content: center;

    padding: 0 2px;
    border-radius: calc(25px / 2);
    color: white;
    font-size: 14px;
    font-family: nanum-bold;
    background-color: var(--blue4);

    position: absolute;
    top: 5px;
    right: 5px;

    @media (min-width: 650px) {
        height: 20px;
        min-width: 20px;
        border-radius: calc(20px / 2);
        font-size: 12px;

        &:hover {
            transform: rotate(-90deg);
            transition: transform 200ms ease-in-out;
        }
    }
`;

const Icon = styled.div`
    margin-bottom: 12px;

    img {
        ${ImgStyle}
    }

    @media (min-width: 650px) {
        margin-bottom: 10px;
    }
`;

const Title = styled.h1`
    font-size: 20px;
    font-family: nanum-bold;

    @media (min-width: 650px) {
        font-size: 16px;
    }
`;

const AlertTitle = styled.p`
    color: rgb(0, 0, 0, 0.8);
    font-family: nanum-light;
    font-size: 18px;
    line-height: 25px;
    word-break: keep-all;

    @media (min-width: 650px) {
        font-size: 16px;
        line-height: 22px;
    }
`;

const OptionButton = styled.p`
    font-size: 13px;
    font-family: nanum-reg;
    color: white;
    outline: none;

    &.black {
        color: black;
    }
`;
