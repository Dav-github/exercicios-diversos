import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import RegisterForms from "./pages/RegisterForms";
import ListClients from "./pages/ListClients";

export default function MainRouter() {
    return (
        <>
            <Routes>
                <Route element={<Dashboard />} path="/"></Route>
                <Route element={<RegisterForms />} path="/criar-ficha"></Route>
                <Route
                    element={<ListClients />}
                    path="/listar-clientes"
                ></Route>
                <Route path="*" element={"404"}></Route>
            </Routes>
        </>
    );
}
