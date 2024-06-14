import { http } from './http';

// 원데이 클래스 목록 가져오기
export const getClassList = async ({ hobby }: { hobby: string }) => {
    try {
        const res = await http.get(`/one/${hobby}`);
        console.log(res);
        return res;
    } catch (error) {
        console.log(error);
    }
};
