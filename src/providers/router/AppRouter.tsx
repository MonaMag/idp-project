import { Navigate, Routes, Route } from "react-router-dom";
import {Count} from "../../pages/Count/Count";
import {Multiplication} from "../../pages/MultiplicationPage/Multiplication";
import {Division} from "../../pages/DivisionPage/Division";

const AppRouter = () => {
  return (
    <Routes>
      <Route path={"/"} element={<Navigate to="/count" replace />} />
      <Route path={"/count"} element={<Count />} />
      <Route path={"/multiplication"} element={<Multiplication />} />
      <Route path={"/division"} element={<Division />} />
    </Routes>
  );
};

export default AppRouter;
