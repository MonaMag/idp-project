import { Navigate, Routes, Route } from "react-router-dom";
import {MainPage} from "../../pages/MainPage/MainPage";
import {ArticlesPage} from "../../pages/ArticlesPage/ArticlesPage";
import {ProfilePage} from "../../pages/ProfilePage/ProfilePage";

const AppRouter = () => {
  return (
    <Routes>
      <Route path={"/"} element={<Navigate to="/main" replace />} />
      <Route path={"/main"} element={<MainPage />} />
      <Route path={"/profile"} element={<ProfilePage />} />
      <Route path={"/articles"} element={<ArticlesPage />} />
    </Routes>
  );
};

export default AppRouter;
