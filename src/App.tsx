import { Routes, Route } from 'react-router-dom';
import MainPage from 'pages/MainPage';
import ChatbotPage from 'pages/ChatbotPage';
import RecommendPage from 'pages/RecommendPage';

function App() {
  return (
    <>
      <Routes>
        <Route path={'/'} element={<MainPage />}></Route>
        <Route path={'/chat'} element={<ChatbotPage />}></Route>
        <Route path={'/recommend'} element={<RecommendPage />}></Route>
      </Routes>
    </>
  );
}

export default App;
