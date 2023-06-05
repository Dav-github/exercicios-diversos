import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import SignIn from "./pages/SignIn";

function MainRoutes() {
  return (
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="/dashboard" element={<Dashboard />}>
        <Route path="/dashboard/:id" element={<Dashboard />}></Route>
      </Route>
    </Routes>
  );
}

export default MainRoutes;
