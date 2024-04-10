import { http } from './http';

import { PostInfo } from 'components/_common/props';

// 게시물 작성
export const savePost = async ({
    user_id,
    hobby_id,
    postInfo,
}: {
    user_id: number;
    hobby_id: number;
    postInfo: PostInfo;
}) => {
    const formData = new FormData();
    formData.append('title', postInfo.title);
    formData.append('content', postInfo.content);
    formData.append('open', postInfo.open);

    // boardFile이 null이 아닌 경우에만 formData에 추가
    if (postInfo.boardFile !== null) {
        formData.append('boardFile', postInfo.boardFile);
    } else {
        // boardFile이 null인 경우에는 null을 formData에 추가
        formData.append('boardFile', 'null');
    }

    // formData.append('postInfo', JSON.stringify(postInfo));
    // FormData의 key 확인
    // @ts-ignore
    for (const key of formData.keys()) {
        console.log(key);
    }
    // FormData의 value 확인
    // @ts-ignore
    for (const value of formData.values()) {
        console.log(value);
    }
    console.log(formData);

    try {
        const res = await http.post(
            `/board/${user_id}/hobbies/${hobby_id}/save`,
            formData,
            {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            },
        );
        console.log(res);
        return res;
    } catch (error) {
        console.log(error);
    }
};

// 게시물 목록 반환
export const getHobbyBoard = async ({ hobby_id }: { hobby_id: number }) => {
    try {
        const res = http.get(`/board/${hobby_id}/hobbyboard`);
        console.log(res);
        return res;
    } catch (error) {
        console.log(error);
    }
};

// 게시물 상세 조회
export const getPostDetail = async ({ board_id }: { board_id: number }) => {
    try {
        const res = http.get(`/board/${board_id}`);
        console.log(res);
        return res;
    } catch (error) {
        console.log(error);
    }
};

// 게시물 삭제
export const deletePost = async ({ board_id }: { board_id: number }) => {
    try {
        const res = http.get(`/board/delete/${board_id}`);
        console.log(res);
        return res;
    } catch (error) {
        console.log(error);
    }
};
