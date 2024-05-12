import styled from 'styled-components';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { useRecoilValue } from 'recoil';

// component
import AlertTitle from 'components/_common/AlertTitle';

// api
import { addHobby } from 'api/add';

// recoil
import { UserAtom } from 'recoil/User';

const AddButton = ({
    category,
    detailhobby,
    percent,
}: {
    category: string;
    detailhobby: string;
    percent: number;
}) => {
    // 사용자 id 가져오기
    const userInfo = useRecoilValue(UserAtom);

    // 서랍장 post api
    const handleButtonClick = () => {
        addHobby(userInfo.id, category, detailhobby, percent).then((res) => {
            console.log(res);
        });

        withReactContent(Swal).fire({
            icon: 'success',
            title: <AlertTitle text={'성공적으로 추가되었습니다!'} />,
            showConfirmButton: false,
            timer: 2000,
        });
    };

    return (
        <Button type="button" onClick={handleButtonClick}>
            서랍장에 추가하기
        </Button>
    );
};

export default AddButton;

const Button = styled.button`
    padding: 6px 10px;
    font-size: 12px;
    color: white;
    white-space: nowrap;
    border-radius: 4px;
    background-color: var(--blue4);

    @media (min-width: 650px) {
        font-size: 10px;

        &:hover {
            cursor: pointer;
            opacity: 0.7;
            transition: opacity 200ms ease-in-out;
        }
    }
`;
