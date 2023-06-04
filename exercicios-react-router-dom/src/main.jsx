import React from "react";
import ReactDOM from "react-dom/client";
import Dashboard from "./pages/Dashboard/Dashboard.jsx";
import "./index.css";
import SignIn from "./pages/SignIn/SignIn.jsx";
import SignUp from "./pages/SignUp/SignUp.jsx";
import {
  Routes,
  Route,
  BrowserRouter,
  Outlet,
  Navigate,
} from "react-router-dom";
import PageAleatoria from "./components/page aleatoria/index.jsx";
import NotFound from "./pages/NotFound/index.jsx";

function ProtectedRoutes({ redirectTo }) {
  const isAuth = true;

  return isAuth ? <Outlet /> : <Navigate to={redirectTo} />;
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignIn />}></Route>
        <Route path="/sign-in" element={<SignIn />}></Route>
        <Route path="/sign-up" element={<SignUp />}></Route>
        <Route element={<ProtectedRoutes redirectTo={"/"} />}>
          <Route path="/dashboard" element={<Dashboard />}>
            <Route path=":id" element={<PageAleatoria />}></Route>
          </Route>
        </Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
