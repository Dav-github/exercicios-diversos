import { Routes, Route, Outlet, Navigate } from "react-router-dom";
import "./App.css";
import Main from "./pages/Main";
import SignIn from "./pages/SignIn";

function ProtectRoutes({ redirectTo }) {
  const isAuth = true;

  return isAuth ? <Outlet /> : <Navigate to={redirectTo} />;
}

function MainRoutes() {
  return (
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route element={<ProtectRoutes redirectTo={"/"} />}>
        <Route path="/dashboard" element={<Main />} />
      </Route>
      <Route path="*" element={<h1>Error 404</h1>} />
    </Routes>
  );
}

export default MainRoutes;
