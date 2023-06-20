import React from "react";
import ReactDOM from "react-dom/client";
import Main from "./pages/Main";
import "./index.css";
import { UserProvider } from "./contexts/userContexts";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <UserProvider>
            <Main />
        </UserProvider>
    </React.StrictMode>
);
