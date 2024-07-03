import React from 'react';
import {Route, Routes} from 'react-router-dom';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Comic from './components/Comic';
import Layout from "../src/components/layouts/Layout.tsx"

const App: React.FC = () => {
    return (
        <Routes>
            <Route path="/" element={<Layout/>}>
                <Route path="/about" element={<About/>}/>
                <Route path="/projects" element={<Projects/>}/>
                <Route path="/contact" element={<Contact/>}/>
                <Route path="/comic" element={<Comic/>}/>
            </Route>
        </Routes>
    );
};

export default App;
