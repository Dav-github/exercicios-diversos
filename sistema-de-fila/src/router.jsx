import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import RegisterForms from "./pages/RegisterForms";

export default function MainRouter() {
    return (
        <>
            <Routes>
                <Route element={<Dashboard />} path="/"></Route>
                <Route element={<RegisterForms />} path="/criar-ficha"></Route>
                <Route path="*" element={"404"}></Route>
            </Routes>
        </>
    );
}
