import './App.scss';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Land from './components/Land';
import Nav from './components/Nav';
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Skills from './components/Skills';
import { createContext, useState } from 'react';

export const AppStates = createContext(null); 

function App() {
    const [homeSelect, setHomeSelect] = useState(true);
    const [projectsSelect, setProjectsSelect] = useState(false);
    const [contactSelect, setContactSelect] = useState(false);
    const [skillsSelect, setSkillsSelect] = useState(false);
    const [clickMenu, setClickMenu] = useState(false);

    return (
        <div>
            <Router>
                <AppStates.Provider 
                value={{homeSelect, setHomeSelect,
                projectsSelect, setProjectsSelect,
                contactSelect, setContactSelect,
                skillsSelect, setSkillsSelect,
                clickMenu, setClickMenu
                    }}>                
                    <Nav />
                    <Routes>
                        <Route path="/Portfolio/" element={<Land />}></Route>
                        <Route path="/projects" element={<Projects />}></Route>
                        <Route path="/contact" element={<Contact />}></Route>
                        <Route path="/skills" element={<Skills />}></Route>
                    </Routes>
                </AppStates.Provider>
            </Router>
        </div>
    );
}

export default App;
