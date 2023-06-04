import { Routes, Route } from "react-router-dom";
import "./App.css";
import Main from "./pages/Main";
import SignIn from "./pages/SignIn";

function MainRoutes() {
  return (
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="/dashboard" element={<Main />} />
    </Routes>
  );
}

export default MainRoutes;
