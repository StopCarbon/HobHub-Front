import { useEffect } from 'react';
import { useSetRecoilState } from 'recoil';

import { sendCode } from 'api/login';

import { LoginAtom, LoginStateAtom } from 'recoil/Login';

const KakaoAuthPage = () => {
    const setLogin = useSetRecoilState(LoginAtom);
    const setLoginState = useSetRecoilState(LoginStateAtom);

    useEffect(() => {
        const params = new URL(document.location.toString()).searchParams;
        const code: string = params.get('code') || '';

        const login = async () => {
            // 인가코드 post api
            const res = await sendCode(code);
            const data = res?.data;
            console.log(data);

            if (data) {
                setLogin({
                    name: data.userInfo.properties.nickname,
                    accessToken: data.accessToken,
                    refreshToken: data.refreshToken,
                });
                console.log(data);
                // 토큰을 받아서 localStorage에 저장
                window.localStorage.setItem('accessToken', data.accessToken);
                setLoginState(true);

                // 메인 페이지로 이동
                window.location.href = '/main';
            }
        };

        login();
    }, []);

    return <></>;
};

export default KakaoAuthPage;
