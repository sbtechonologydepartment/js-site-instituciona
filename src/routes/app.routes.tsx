import { Route, Routes } from "react-router-dom";
import { Start } from "../pages/Start";
import { Home } from "../pages/Home";
import { Contacts } from "../pages/Contacts";
import { AboutUs } from "../pages/AboutUs";
import { Machines } from "../pages/Machines";
import { Services } from "../pages/Services";

export function AppRoutes() {
    return (
        <Routes>
            <Route path='/' element={<Start />} />
            <Route path='/home' element={<Home />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/aboutUs" element={<AboutUs />} />
            <Route path="/services" element={<Services />} />
            <Route path="/machines/*" element={<Machines />} />
        </Routes>
    )
}