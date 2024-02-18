import React, { useState } from 'react'
import './Nav.scss'
import { Link } from 'react-router-dom'
import code from "../images/code-solid.svg";
import bars from "../images/bars-solid.svg";

const Nav = () => {
    const [homeSelect, setHomeSelect] = useState(true);
    const [projectsSelect, setProjectsSelect] = useState(false);
    const [contactSelect, setContactSelect] = useState(false);
    const [skillsSelect, setSkillsSelect] = useState(false);
    const [clickMenu, setClickMenu] = useState(false);

    const clicked = {
        home: [homeSelect, setHomeSelect],
        projects: [projectsSelect, setProjectsSelect],
        contact: [contactSelect, setContactSelect],
        skills: [skillsSelect, setSkillsSelect]
    };

    const handleSelect = (selected) => {
        for (const key of Object.keys(clicked)) {
            clicked[key][1](false);
        }
        clicked[selected][1](true);
        setClickMenu(false);
    };

    return (
        <div className='nav' >
            <Link to="/Portfolio/" className={homeSelect ? "logo selected-logo" : "logo"} 
            onClick={() => handleSelect("home")}><img src={code} alt='aa' /></Link>
            <div className={`sections ${clickMenu? "clicked" : ""}`}>
                <div className="section">
                    <img src={bars} 
                    onClick={() => clickMenu? setClickMenu(false) : setClickMenu(true)} alt="" />
                </div>
                <Link className={`menu section ${homeSelect ? "selected" : ""}`} to="/Portfolio/" 
                onClick={() => handleSelect("home")}>Home</Link>
                <Link className={`menu section ${skillsSelect ? "selected" : ""}`} to="/skills" 
                onClick={() => handleSelect("skills")}>Skills</Link>
                <Link className={`menu section ${projectsSelect ? "selected" : ""}`} to="/projects" 
                onClick={() => handleSelect("projects")}>Projects</Link>
                <Link className={`menu section ${contactSelect ? "selected" : ""}`} to="/contact" 
                onClick={() => handleSelect("contact")}>Contact</Link>
            </div>
        </div>
    )
}

export default Nav
