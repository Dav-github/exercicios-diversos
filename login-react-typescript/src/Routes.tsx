import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";

export default function MainRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Login />}></Route>
        </Routes>
    );
}
