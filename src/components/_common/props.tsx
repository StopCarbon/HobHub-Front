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
}

// 게시물 목록
export interface BoardList {
    id: number;
    title: string;
    boardFile: string;
}

// 게시물 상세 내용
export interface PostDetail {
    id: number;
    title: string;
    content: string;
    boardCreatedTime: string;
    boardFile?: string;
}

// 게시물 작성 형식
export interface PostInfo {
    title: string;
    content: string;
    boardFile?: string; // 파일
}
