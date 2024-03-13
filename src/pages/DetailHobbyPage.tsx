import styled from 'styled-components';
import { useParams } from 'react-router-dom';

import { Container } from 'components/_common/pageLayout';
import Navbar from 'components/_common/Navbar';
import Header from 'components/_common/Header';
import Explanation from 'components/_common/Explanation';
import HobbyListItem from 'components/detailhobby/HobbyListItem';

import { detailhobbies } from 'components/_common/hobbies';

const DetailHobbyPage = () => {
    const { category } = useParams();

    // 카테고리별 세부 취미 목록 가져오기
    const detailhobbieslist = Object.keys(detailhobbies[category as string]);

    return (
        <Wrapper>
            <Navbar />
            <Container>
                <Header
                    bold={`${category}` + '\u00A0'}
                    reg="카테고리 취미 목록"
                />
                <Explanation text="가장 마음에 드는 목록을 클릭하여 바로 취미 활동을 시작해보세요!" />
                <List>
                    {detailhobbieslist.map((detailhobby, index) => (
                        <HobbyListItem
                            key={index}
                            order={index + 1}
                            category={category as string}
                            detailhobby={detailhobby}
                        />
                    ))}
                </List>
            </Container>
        </Wrapper>
    );
};

export default DetailHobbyPage;

const Wrapper = styled.div`
    position: relative; // PC 버전 container 때문
`;

const List = styled.ul``;
