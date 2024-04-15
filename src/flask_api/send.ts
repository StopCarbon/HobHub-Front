import { http } from './http';

export const send = async (message: string | string[]) => {
    try {
        const res = await http.post(`/send_message`, { message });
        console.log(res);
        return res;
    } catch (error) {
        console.log(error);
    }
};
