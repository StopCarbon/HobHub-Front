import { http } from './http';

// 사용자의 취미 아카이브 목록 가져오기
export const getHobbyList = async ({ user_id }: { user_id: number }) => {
    try {
        const res = await http.get(`/user/${user_id}/hobbylist`);
        console.log(res);
        return res;
    } catch (error) {
        console.log(error);
    }
};
