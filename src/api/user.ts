import { http } from './http';
import { UserInfo } from 'components/_common/props';

export const saveUserInfo = async ({ userInfo }: { userInfo: UserInfo }) => {
    try {
        const res = await http.post(`/user/save`, userInfo);
        console.log(res);
        return res;
    } catch (error) {
        console.log(error);
    }
};
