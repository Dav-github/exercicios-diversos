import { Routes, Route } from "react-router-dom";
import SignIn from "./pages/SignIn";
import Dashboard from "./pages/Dashboard";
import Card2 from "./ components/Card2";

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
