import { Navigate, Route, Routes } from 'react-router-dom';
import { MainPage } from '../../pages/MainPage/MainPage';
import { ArticlesPage } from '../../pages/ArticlesPage/ArticlesPage';
import { ProfilePage } from '../../pages/ProfilePage/ProfilePage';
import { ArticleDetailsPage } from '../../pages/ArticleDetailsPage/ArticleDetailPage';

const AppRouter = () => {
  return (
    <Routes>
      <Route path={'/'} element={<Navigate to="/main" replace />} />
      <Route path={'/main'} element={<MainPage />} />
      <Route path={'/profile'} element={<ProfilePage />} />
      <Route path={'/articles'} element={<ArticlesPage />} />
      <Route path={'/articles/:id'} element={<ArticleDetailsPage />} />
    </Routes>
  );
};

export default AppRouter;
