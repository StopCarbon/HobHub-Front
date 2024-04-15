// 원데이 클래스 정보 데이터
export interface ClassData {
    category: string;
    title: string;
    link: string;
    price: string;
    location: string;
    level: string;
    picture: string;
    total_time: number;
}

// 취미 폴더 목록
export interface HobbyList {
    id: number;
    hobby: string;
    category: string;
}

// 게시물 목록 (썸네일)
export interface BoardList {
    id: number;
    title: string;
    boardFile: string;
    storedFileName: string;
}

// 게시물 상세 내용
export interface PostDetail {
    id: number;
    title: string;
    content: string;
    boardCreatedTime: string;
    storedFileName?: string;
}

// 게시물 작성 형식
export interface PostInfo {
    title: string;
    content: string;
    boardFile: Blob | null; // 파일
    open: string;
}

// 사용자 정보
export interface User {
    id: number;
    name: string;
    age: number;
    gender: string;
    home: string;
    income: string;
    motive: string;
    work: number;
    wkend: number;
}

// 추천 취미 리스트
export interface RecommendList {
    hobby1: string;
    hobby2: string;
    hobby3: string;
}
