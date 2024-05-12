import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

// component
import { Container } from 'components/_common/pageLayout';
import { ClassData } from 'components/_common/props';
import Navbar from 'components/_common/Navbar';
import Header from 'components/_common/Header';
import Explanation from 'components/_common/Explanation';
import ClassCard from 'components/onedayclass/ClassCard';

// api
import { getClassList } from 'api/onedayclass';

const OnedayclassPage = () => {
    const { detailhobby } = useParams(); // 사용자가 선택한 취미 가져오기

    const [classData, setClassData] = useState<ClassData[] | null>(null);

    useEffect(() => {
        getClassList({ hobby: detailhobby as string }).then((res) => {
            setClassData(res?.data);
            console.log(res?.data);
        });
    }, []);

    // 난이도 선택
    const handleLevelClick = () => {};

    return (
        <Wrapper>
            <Navbar />
            <Container>
                <Header
                    bold={detailhobby + '\u00A0'}
                    reg="원데이 클래스 목록"
                />
                <Explanation text="민지님의 위치와 가까운 순서대로 정렬한 결과입니다. " />
                <Filters>
                    <Filter>가격 낮은순</Filter>
                    <Filter>소요시간 적은순</Filter>
                    <Filter onClick={handleLevelClick}>난이도</Filter>
                </Filters>
                <Content>
                    {classData
                        ? classData.map((item, idx) => (
                              <ClassCard key={idx} classData={item} />
                          ))
                        : 'Loading...'}
                </Content>
            </Container>
        </Wrapper>
    );
};

export default OnedayclassPage;

const Wrapper = styled.div`
    position: relative;
`;

const Filters = styled.div`
    display: flex;
    margin-bottom: 20px;

    @media (min-width: 650px) {
        margin-bottom: 12px;
    }
`;

const Filter = styled.button`
    background-color: var(--grey);
    border-radius: 4px;
    padding: 8px 10px;
    font-size: 18px;
    margin-right: 8px;
    white-space: nowrap;

    @media (min-width: 650px) {
        padding: 8px 10px;
        font-size: 14px;
        margin-right: 10px;
        cursor: pointer;

        &:hover {
            opacity: 0.6;
            transition: opacity 200ms ease-in-out;
        }
    }
`;

const Content = styled.ol`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: start;
    flex-wrap: wrap;
`;
