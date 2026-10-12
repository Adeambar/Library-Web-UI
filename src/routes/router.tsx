import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HomePage from "../pages/home";
import Page from "./routerTitle";
import { RouterInit } from "../utilities/routerInit";
import VisitPage from "../pages/visit";
import LoginPage from "../pages/admin/login";
import DashboardPage from "../pages/admin/dashboard";
import VisitorPage from "../pages/admin/visitor";

const PageRoutes = () => {
    return (
        <Router>
            <RouterInit />
            <Routes>
                <Route path="/" element={<Page title="Beranda - Perpustakaan Online"><HomePage /></Page>} />
                <Route path="/visit" element={<Page title="Kunjungan - Perpustakaan Online"><VisitPage /></Page>} />
                <Route path="/admin/login" element={<Page title="Login - Perpustakaan Online"><LoginPage /></Page>} />
                <Route path="/admin/dashboard" element={<Page title="Dashboard - Perpustakaan Online"><DashboardPage /></Page>} />
                <Route path="/admin/visitor" element={<Page title="Pengunjung - Perpustakaan Online"><VisitorPage /></Page>} />
            </Routes>
        </Router>
    );
};

export default PageRoutes;