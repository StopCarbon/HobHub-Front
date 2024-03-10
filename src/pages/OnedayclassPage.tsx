import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

import { Container } from 'components/_common/pageLayout';
import { ClassData } from 'components/_common/props';
import { hobbies, detailhobbies } from 'components/_common/hobbies';
import Navbar from 'components/_common/Navbar';
import Header from 'components/_common/Header';
import Explanation from 'components/_common/Explanation';
import ClassCard from 'components/onedayclass/ClassCard';

const OnedayclassPage = () => {
    const { hobby, detailhobby } = useParams(); // 사용자가 선택한 취미 카테고리 & 세부 취미

    // 크롤링을 위해 한국어 -> 영어로 변경
    const search_hobby = hobbies[hobby as string];
    const search_detailhobby =
        detailhobbies[hobby as string][detailhobby as string];

    const [data, setData] = useState<ClassData[] | null>(null);

    useEffect(() => {
        fetch(`/search?category=${search_hobby}&keyword=${search_detailhobby}`)
            .then((res) => res.json())
            .then((data) => {
                setData(data);
                console.log(data);
            });
    }, [hobby, detailhobby]);

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
                    {data
                        ? data.map((item, index) => (
                              <ClassCard key={index} classData={item} />
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
`;

const Filter = styled.button`
    background-color: var(--grey);
    border-radius: 4px;
    padding: 8px 10px;
    font-size: 18px;
    margin-right: 8px;
    white-space: nowrap;

    @media (min-width: 1024px) {
        padding: 10px 12px;
        font-size: 20px;
        margin-right: 15px;
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
