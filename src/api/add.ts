import { http } from './http';

export const addHobby = async (hobby: string) => {
    try {
        const res = await http.post(`/user/${1}/hobby`, { hobby: hobby });
        console.log('result:' + res);
    } catch (error) {
        console.log(error);
    }
};
