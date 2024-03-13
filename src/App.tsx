import { Routes, Route } from 'react-router-dom';

import LoginPage from 'pages/LoginPage';
import MainPage from 'pages/MainPage';
import ChatbotPage from 'pages/ChatbotPage';
import DetailRecommendPage from 'pages/DetailRecommendPage';
import CategoryRecommendPage from 'pages/CategoryRecommendPage';
import DetailHobbyPage from 'pages/DetailHobbyPage';
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
                <Route path={'/main'} element={<MainPage />} />
                <Route path={'/chat'} element={<ChatbotPage />} />
                <Route
                    path={'/detailrecommend'}
                    element={<DetailRecommendPage />}
                />
                <Route
                    path={'/categoryrecommend'}
                    element={<CategoryRecommendPage />}
                />
                <Route
                    path={'/detailhobby/:category'}
                    element={<DetailHobbyPage />}
                />
                <Route
                    path={'/onedayclass/:category/:detailhobby'}
                    element={<OnedayclassPage />}
                />
                <Route path={'/create'} element={<CreatePage />}></Route>
                <Route path={'/archive'} element={<ArchiveFolderPage />} />
                <Route path={'/archive/:hobby'} element={<ArchivePage />} />
                <Route
                    path={'/archivedetail'}
                    element={<ArchiveDetailPage />}
                />
                <Route path={'/*'} element={<ErrorPage />} />
            </Routes>
        </>
    );
}

export default App;
