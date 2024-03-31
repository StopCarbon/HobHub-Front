import styled from 'styled-components';

// components
import { Container } from 'components/_common/pageLayout';
import Navbar from 'components/_common/Navbar';
import CreateForm from 'components/create/CreateForm';

const CreatePage = () => {
    return (
        <Wrapper>
            <Navbar />
            <Container>
                <CreateForm hobbyId={1} />
            </Container>
        </Wrapper>
    );
};

export default CreatePage;

const Wrapper = styled.div`
    position: relative;
`;
