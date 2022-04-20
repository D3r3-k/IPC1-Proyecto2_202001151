import { BrowserRouter, Route, Routes, Navigate  } from "react-router-dom";

// TODO: Rutas
import HomePage from "../pages/index";
import DashboardPage from "../pages/dashboard";

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<HomePage />} />
                <Route exact path="/dashboard" element={<DashboardPage />} />
                <Route path='/logout' element={<Navigate to="/" />} />
            </Routes>
        </BrowserRouter>
    )
}