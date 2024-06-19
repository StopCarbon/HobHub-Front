# HobHub : AI 기반 맞춤형 취미 추천 및 아카이빙 웹 서비스
사용자가 가진 조건(나이, 성별, 여가시간, 소득, 거주 지역)을 종합적으로 고려해 AI를 기반으로 사용자에게 최적인 취미를 추천함으로써 사용자들이 간편하고 빠르게 취미 활동을 시작할 수 있도록 도와주는 웹 서비스

![logo](https://github.com/money-catcher/HobHub-Front/assets/109021332/3859f1d4-beb4-42fc-8081-9004cf2b0dd2)
## 팀원 소개
| <img src="https://avatars.githubusercontent.com/u/108976815?v=4" width="200px" /> | <img src="https://avatars.githubusercontent.com/u/104544503?v=4" width="200px" /> | <img src="https://avatars.githubusercontent.com/u/109021332?v=4" width="200px" />  |
| :------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------: |
|                      [박유진](https://github.com/jin171)                       |                        [박혜진](https://github.com/hyp00)                        |                     [최예빈](https://github.com/beenvyn)                      |       
|                   팀장, 백엔드                |                   팀원, 백엔드             |        팀원, 프론트엔드           |                  

##  기술 스택
<img src="https://img.shields.io/badge/Typescript-1572B6?style=flat-square&logo=Typescript&logoColor=white"> <img src="https://img.shields.io/badge/React-61DAFB?style=flatsquare&logo=React&logoColor=white"> 

<img src="https://img.shields.io/badge/axios-785AC3?style=flat-square&logo=axios&logoColor=white"> <img src="https://img.shields.io/badge/recoil-785AC3?style=flatsquare&logo=recoil&logoColor=white">

<img src="https://img.shields.io/badge/styled_components-DB7093?style=flat-square&logo=styled-components&logoColor=white"> <img src="https://img.shields.io/badge/npm-CB3837?style=flat-square&logo=npm&logoColor=white"> <img src="https://img.shields.io/badge/Prettier-F7B93E?style=flat-square&logo=Prettier&logoColor=white">

<img src="https://img.shields.io/badge/Figma-F24E1E?style=flat-square&logo=Figma&logoColor=white"/> <img src="https://img.shields.io/badge/GitHub-181717?style=flat-square&logo=GitHub&logoColor=white"/>
<img src="https://img.shields.io/badge/vercel-181717?style=flat-square&logo=vercel&logoColor=white"/>

##  라이브러리
`````
        "axios": "^1.6.8",
        "http-proxy-middleware": "^2.0.6",
        "react": "^18.2.0",
        "react-dom": "^18.2.0",
        "react-icons": "^5.2.0",
        "react-router-dom": "^6.22.0",
        "react-scripts": "5.0.1",
        "recoil": "^0.7.7",
        "recoil-persist": "^5.1.0",
        "styled-components": "^6.1.8",
        "sweetalert2": "^11.10.8",
        "sweetalert2-react-content": "^5.0.7",
        "tiny-slider-react": "^0.5.7",
        "typescript": "^4.9.5",
        "web-vitals": "^2.1.4"
``````
##  사용 데이터
콘텐츠 기반 추천 알고리즘에 사용된 데이터: <br>
https://docs.google.com/spreadsheets/d/1leFDaOCDJfxu9AZgyfMM_50xPK2Z39ayGna_stVtbxw/edit?gid=1227239017#gid=1227239017  <br>
[출처: 컨슈머인사이트 'MZ 문화여가활동 특징 데이터']

협업 필터링 추천 알고리즘에 사용된 데이터: <br>
https://docs.google.com/spreadsheets/d/1Fb4xSgideUwhk5jMRLWG8XCmubvU8s1Y/edit?gid=1062421834#gid=1062421834  <br>
[출처: 솜씨당]

## 시스템 구조도
![스크린샷 2024-06-19 161201](https://github.com/money-catcher/HobHub-Front/assets/109021332/3f23f71b-576f-47ce-9a90-a867300ece5c)

# 프로젝트 구조도 및 설명
## 프로젝트 구조도
````
🌟src
├─ 📂api
├─ 📂flask_api
├─ 📂assets
│   ├─📂_common
│   ├─📂hobby_icons
│   ├─📂sidebar
│   ├─📂loginpage
│   ├─📂error
│   ├─📂archive
├─ 📂components
│   ├─📂_common
│   ├─📂archive
│   ├─📂archivefolder
│   ├─📂create
│   ├─📂main
│   ├─📂onedayclass
│   ├─📂recommend
├─ 📂fonts
├─ 📂pages
│   ├─📄ArchiveDetailPage.ts
│   ├─📄ArchiveFolderPage.ts
│   ├─📄ArchivePage.ts
│   ├─📄ChatbotPage.ts
│   ├─📄CreatePage.ts
│   ├─📄ErrorPage.ts
│   ├─📄KaKaoAuthPage.ts
│   ├─📄LoginPage.ts
│   ├─📄MainPage.ts
│   ├─📄OnedayclassPage.ts
│   ├─📄RecommendPage.ts
├─ 📂recoil
│   ├─📄Login.ts
│   ├─📄Recommend.ts
│   ├─📄User.ts
│   ├─📄UserDetail.ts
├─ 📂types
│   ├─📄index.d.ts
├─ 📄App.tsx
└─ 📄index.tsx
````
## 폴더별 설명
- `📂api` : Spring 서버와의 통신 api 코드가 담긴 폴더. 게시물 작성•수정•삭제 api, 원데이 클래스 리스트 불러오기 api, 메인 페이지 게시물 불러오기 api, 피드백 api, 사용자 정보 불러오기 api, 사용자의 취미 아카이브 폴더 불러오기 api 등
- `📂flask_api` : Flask 서버와의 통신 api 코드가 담긴 폴더. 사용자 답변을 챗봇과 주고받는 api와 추천 취미 리스트를 받아오는 api 등
- `📂assets` : 취미 아이콘, 로고, 사이드바 아이콘 등의 이미지 혹은 svg
- `📂components`  <br>
    - `📂_common` : 사이드바, 사진, 로고, 아바타 등 여러 페이지에서 반복해서 등장하는 컴포넌트 관련 코드
    - `📂archive` : 아카이브 게시물 썸네일 컴포넌트
    - `📂archivefolder` : 아카이브 폴더 컴포넌트
    - `📂create` : 게시물 작성 폼 컴포넌트
    - `📂main` : 메인 페이지의 다른 유저 게시물 컴포넌트
    - `📂onedayclass` : 원데이 클래스 컴포넌트(사진, 가격, 위치, 난이도, 소요시간)
    - `📂recommend` : 추천 취미 결과 컴포넌트와 '서랍장 추가하기' 버튼 컴포넌
- `📂fonts` : NanumSquare와 GmarketSans 폰트를 사용
- `📂pages`
    - `KaKaoAuthPage.tsx`, `LoginPage.tsx` : 카카오 로그인 기능을 구현 코드
    - `ChatbotPage.tsx` : 채팅 ui, 사용자와 Dialogflow와의 답변 주고 받기를 구현한 코드
    - `RecommendPage.tsx` : 추천 취미 및 유사도 반환을 구현한 코드
    - `CreatePage.tsx` : 취미 관련 게시물 작성을 구현한 코드
    - `ArchiveFolderPage.tsx` : 사용자가 저장한 취미 폴더 페이지 구현 코드
    - `ArchivePage.tsx` : 사용자의 취미 게시물을 모아둔 페이지 구현 코드
    - `ArchiveDetailPage.tsx` : 사용자의 취미 게시물 세부 내용 페이지를 구현한 코드
    - `OnedayclassPage.tsx` : 원데이 클래스 목록 페이지를 구현한 코드 
    - `MainPage.tsx` : 다른 유저들의 게시물을 모아둔 메인 페이지를 구현한 코드
    - `ErrorPage.tsx` : 사용자가 잘못된 경로로 접근하거나 예상치 못한 문제 발생시 나타나는 화면을 구현한 코드
- `📂recoil`
    - `Login.ts` : 사용자 로그인시 이름과 토큰을 저장하는 recoil 코드
    - `User.ts` : 사용자의 user_id를 저장하는 recoil 코드
    - `UserDetail.ts` : 챗봇 이용시 사용자가 입력하는 정보를 저장하는 recoil 코드
    - `Recommend.ts` : 사용자가 추천받은 취미와 유사도를 저장하는 recoil 코드
      
## 설치 및 실행
1. 프로젝트를 클론한다.
```
git clone https://github.com/money-catcher/HobHub-Front.git
````
2. 루트 디렉토리로 이동한다.
````
cd HobHub-Front
````
3. 필요 패키지를 설치한다.
````
npm install --force
````
4. 루트 디렉토리 아래에 .env 파일을 생성한 후 아래의 변수들을 설정한다.
```
REACT_APP_API_URL = <REACT_APP_API_URL>
REACT_APP_FLASK_URL = <REACT_APP_FLASK_URL>
REACT_APP_REST_API_KEY =  <REACT_APP_REST_API_KEY>
REACT_APP_REDIRECT_URI = <REACT_APP_REDIRECT_URI>
```````
5. 프로젝트를 실행한다.
````
npm run start
````
