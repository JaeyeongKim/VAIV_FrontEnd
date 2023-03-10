import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import LoginPage from "./pages/LoginPage";
import TopPickPage from "./pages/TopPickPage";
import PortfolioPage from "./pages/PortfolioPage";
import { useRecoilValue } from "recoil";
import { isLoggedInState } from "./atoms/LoginAtom";


function AppRouter() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LoginPage />} />
                <Route path="/toppick" element={<LoginPage />} />
                <Route path="/portfolio" element={<LoginPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default AppRouter;