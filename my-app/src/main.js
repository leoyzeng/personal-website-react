import React from 'react';
import { Routes  , Route } from 'react-router-dom';
import Home from './pages/home';
import Projects from "./pages/projects";
import Other from "./pages/other";

const Main = () => {
    return (
        <Routes> {/* changes page depending on url */}
            <Route path='/' element={<Home />} />
            <Route path='/projects' element={<Projects />} />
            <Route path='/other' element={<Other />} />
        </Routes>
    );
}

export default Main;