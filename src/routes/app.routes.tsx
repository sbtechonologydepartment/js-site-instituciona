import { Route, Routes } from "react-router-dom";
import { Start } from "../pages/Start";
import { Home } from "../pages/Home";
import { Contacts } from "../pages/Contacts";

export function AppRoutes() {
    return (
        <Routes>
            <Route path='/' element={<Start />} />
            <Route path='/home' element={<Home />} />
            <Route path="/contacts" element={<Contacts />} />
        </Routes>
    )
}