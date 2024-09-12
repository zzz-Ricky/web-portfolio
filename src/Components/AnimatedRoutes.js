import React from 'react'
import Home from "../Pages/Home";
import Splash from "../Pages/Splash";
import PG1 from "../Pages/AvantGarde/PG1";
import PG2 from "../Pages/AvantGarde/PG2";
import PG3 from "../Pages/AvantGarde/PG3";
import Simple from "../Pages/Traditional/Simple";
import MissingPage from "../Pages/MissingPage";
import { useLocation, Routes, Route } from "react-router-dom";

import { AnimatePresence } from 'framer-motion'

function AnimatedRoutes() {

    const location = useLocation();

    return (
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Splash />}>
                    <Route index element={<Home />} />
                </Route>
                <Route path="page1" element={<PG1 />} />
                <Route path="page2" element={<PG2 />} />
                <Route path="page3" element={<PG3 />} />
                <Route path="simple" element={<Simple />} />
                <Route path="*" element={<MissingPage />} />
            </Routes>
        </AnimatePresence>
    )
}

export default AnimatedRoutes