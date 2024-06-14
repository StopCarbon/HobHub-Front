import { http } from './http';

// 사용자의 피드백 post 하기
export const postRating = async ({
    user_id,
    hobby_id,
    grade,
}: {
    user_id: number;
    hobby_id: number;
    grade: number;
}) => {
    try {
        const res = await http.post(`star/${user_id}/${hobby_id}/${grade}`);
        return res;
    } catch (error) {
        console.log(error);
    }
};
