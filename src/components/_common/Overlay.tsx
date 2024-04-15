import styled from 'styled-components';

// 배경을 눌러서 사이드바 닫기
const Overlay = ({ closeSidebar }: { closeSidebar: () => void }) => {
    return <Wrapper onClick={closeSidebar} />;
};

export default Overlay;

const Wrapper = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    z-index: 5;
    background-color: rgb(0, 0, 0, 0.6);
    animation: modal-bg-show 0.3s;
    @keyframes modal-bg-show {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }

    @media (min-width: 650px) {
        display: none;
    }
`;
