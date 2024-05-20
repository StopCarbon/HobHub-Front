// 원데이 클래스 정보 데이터
export interface ClassData {
    hobby: string;
    title: string;
    price: string;
    location: string;
    level: string;
    total_time: number;
    link: string;
    picture: string;
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

// 게시물 수정 형식
export interface EditInfo {
    title: string;
    content: string;
    boardFile: Blob | null; // 파일
}

// 사용자 기본 정보
export interface User {
    id: number;
}

// 사용자 정보 존재 여부
export interface UserDetailAvailable {
    available: boolean;
}

// 사용자 상세 정보
export interface UserDetail {
    age: number;
    gender: string;
    location: string;
    income: string;
    motive: string;
    weekday: number;
    weekend: number;
}

// 사용자 정보 저장시 필요한 내용
export interface UserInfo {
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
    category1: string;
    similarity1?: number;
    hobby2: string;
    category2: string;
    similarity2?: number;
    hobby3: string;
    category3: string;
    similarity3?: number;
}

// 로그인 정보
export interface Login {
    name: string;
    accessToken: string;
    refreshToken: string;
    isfirst: boolean;
}
