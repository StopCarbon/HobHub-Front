import { Routes, Route } from 'react-router-dom';

import KakaoAuthPage from 'pages/KakaoAuthPage';
import LoginPage from 'pages/LoginPage';
import MainPage from 'pages/MainPage';
import ChatbotPage from 'pages/ChatbotPage';
import RecommendPage from 'pages/RecommendPage';
import ArchiveFolderPage from 'pages/ArchiveFolderPage';
import ArchiveDetailPage from 'pages/ArchiveDetailPage';
import ArchivePage from 'pages/ArchivePage';
import CreatePage from 'pages/CreatePage';
import OnedayclassPage from 'pages/OnedayclassPage';
import ErrorPage from 'pages/ErrorPage';

function App() {
    return (
        <>
            <Routes>
                <Route path={'/'} element={<LoginPage />} />
                <Route path={'/callback'} element={<KakaoAuthPage />} />
                <Route path={'/main'} element={<MainPage />} />
                <Route path={'/main'} element={<MainPage />} />
                <Route path={'/chat'} element={<ChatbotPage />} />
                <Route path={'/recommend'} element={<RecommendPage />} />
                <Route
                    path={'/onedayclass/:category/:detailhobby'}
                    element={<OnedayclassPage />}
                />
                <Route path={'/create/:hobbyId'} element={<CreatePage />} />
                <Route path={'/archive'} element={<ArchiveFolderPage />} />
                <Route
                    path={'/archive/:hobby/:hobbyId'}
                    element={<ArchivePage />}
                />
                <Route
                    path={'/archivedetail/:boardId'}
                    element={<ArchiveDetailPage />}
                />
                <Route path={'/*'} element={<ErrorPage />} />
            </Routes>
        </>
    );
}

export default App;
