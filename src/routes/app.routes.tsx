import { Route, Routes } from "react-router-dom";
import { Start } from "../pages/Start";
import { Home } from "../pages/Home";

export function AppRoutes() {
    return (
        <Routes>
            <Route path='/' element={<Start />} />
            <Route path='/home' element={<Home />} />
        </Routes>
    )
}