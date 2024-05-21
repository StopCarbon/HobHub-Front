import { http } from './http';

export const KAKAO_AUTH_URI = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${process.env.REACT_APP_REST_API_KEY}&redirect_uri=${process.env.REACT_APP_REDIRECT_URI}`;

// 인가코드 POST api
export const sendCode = async (code: string) => {
    try {
        const res = await http.post('/callback', {
            code: code,
        });
        console.log('code', code);
        return res;
    } catch (err) {
        console.log(err);
    }
};

export const logout = async () => {
    try {
        const res = await http.post('/kakao/logout');
        return res;
    } catch (err) {
        console.log(err);
    }
};
