import styled from 'styled-components';
import { useParams } from 'react-router-dom';

// components
import { Container } from 'components/_common/pageLayout';
import Navbar from 'components/_common/Navbar';
import CreateForm from 'components/create/CreateForm';

const CreatePage = () => {
    const { hobbyId } = useParams();
    const parsedHobbyId = Number(hobbyId);

    return (
        <Wrapper>
            <Navbar />
            <Container>
                <CreateForm hobbyId={parsedHobbyId} />
            </Container>
        </Wrapper>
    );
};

export default CreatePage;

const Wrapper = styled.div`
    position: relative;
`;
