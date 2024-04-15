import styled from 'styled-components';
import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

// component
import { Container } from 'components/_common/pageLayout';
import Navbar from 'components/_common/Navbar';
import Header from 'components/_common/Header';
import ArchiveBox from 'components/archive/ArchiveBox';
import { BoardList } from 'components/_common/props';

// asset
import plus from '../assets/archive/plus.svg';

// api
import { getHobbyBoard } from 'api/board';

const ArchivePage = () => {
    const { hobby, hobbyId } = useParams(); // 아카이브 폴더명, 취미 id
    const parsedHobbyId = Number(hobbyId);

    // 취미 게시물 썸네일 데이터
    const [boxData, setBoxData] = useState<BoardList[]>([]);

    // // 취미 게시물 썸네일 정보 get api
    useEffect(() => {
        getHobbyBoard({ hobby_id: parsedHobbyId }).then((res) => {
            console.log(res?.data);
            setBoxData(res?.data);
        });
    }, []);

    const navigate = useNavigate();
    const handleAddClick = () => {
        navigate(`/create/${hobbyId}`);
    };

    return (
        <Wrapper>
            <Navbar />
            <Container>
                <Header bold={hobby + '\u00A0'} reg="아카아브" />
                <ArchiveBoxWrapper>
                    {boxData.map((data) => (
                        <ArchiveBox
                            boardId={data.id}
                            title={data.title}
                            image={data.storedFileName}
                        />
                    ))}
                </ArchiveBoxWrapper>
                <AddButton onClick={handleAddClick}>
                    <img src={plus} alt="add" />
                </AddButton>
            </Container>
        </Wrapper>
    );
};

export default ArchivePage;

const Wrapper = styled.div`
    position: relative;
`;

const AddButton = styled.button`
    width: 80px;
    height: 80px;
    border-radius: 50%;
    box-shadow: var(--popup-shadow);
    background-color: var(--pink);
    background-image: linear-gradient(to top, var(--blue2) 0%, transparent 80%);
    background-size: cover;

    position: absolute;
    right: 20px;
    bottom: -70px; // Wrapper를 기준으로 간격 조정

    display: flex;
    justify-content: center;
    align-items: center;

    @media (min-width: 650px) {
        width: 65px;
        height: 65px;
        cursor: pointer;

        &:hover {
            transform: rotate(180deg);
            transition: transform 300ms ease-in-out;
        }
    }
`;

const ArchiveBoxWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    margin-top: 30px;

    @media (min-width: 650px) {
        margin-top: 20px;
        justify-content: center;
    }
`;
