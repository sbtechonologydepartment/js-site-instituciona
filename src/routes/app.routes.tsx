import { Route, Routes } from "react-router-dom";
import { Start } from "../pages/Start";

export function AppRoutes() {
    return (
        <Routes>
            <Route path='/' element={<Start />} />
        </Routes>
    )
}