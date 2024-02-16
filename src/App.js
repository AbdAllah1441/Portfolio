import './App.scss';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Land from './components/Land';
import Nav from './components/Nav';
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Skills from './components/Skills';

function App() {
    return (
        <div>
            <Router>
                <Nav />
                <Routes>
                    <Route path="/" element={<Land />}></Route>
                    <Route path="/projects" element={<Projects />}></Route>
                    <Route path="/contact" element={<Contact />}></Route>
                    <Route path="/skills" element={<Skills />}></Route>
                </Routes>
            </Router>
        </div>
    );
}

export default App;
