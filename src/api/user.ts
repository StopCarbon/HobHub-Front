import { http } from './http';

interface UserInfo {
    name: string;
    age: number;
    gender: string;
    home: string;
    income: string;
    motive: string;
    work: number;
    wkend: number;
}

export const saveUserInfo = async ({ userInfo }: { userInfo: UserInfo }) => {
    try {
        const res = await http.post(`/user/save`, userInfo);
        console.log(res);
    } catch (error) {
        console.log(error);
    }
};
