import { http } from './http';

import { PostInfo } from 'components/_common/props';

// 게시물 저장
export const savePost = async ({
    user_id,
    hobby_id,
    postInfo,
}: {
    user_id: number;
    hobby_id: number;
    postInfo: PostInfo;
}) => {
    try {
        const res = await http.post(
            `/board/${user_id}/hobbies/${hobby_id}/save`,
            postInfo,
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
