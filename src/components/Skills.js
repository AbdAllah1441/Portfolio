import React from 'react'
import "./Skills.scss"
import react from "../images/react.svg";
import js from "../images/js.svg";
import html from "../images/html5.svg";
import css from "../images/css3.svg";
import c from "../images/c.svg";
import python from "../images/python.svg";
import sql from "../images/sql.svg";
import mongo from "../images/mongodb-icon.svg";

const Skills = () => {
    const skills = [{name: "ReactJS", level: "four_p", icon: react}, {name: "JavaScript", level: "four_p", icon: js},
        {name: "HTML", level: "four", icon: html}, {name: "CSS", level: "four_p", icon: css},
        {name: "Python", level: "four_p", icon: python}, {name: "C/C++", level: "three_p", icon: c},
        {name: "SQL", level: "three", icon: sql}, {name: "MongoDB", level: "three_p", icon: mongo}]

    return (
        <div className = 'skills_container'>
            <h1>My Skills</h1>
            <div className="content">            
                <div className="skills">
                    {skills.map((s) => 
                        <div className = {`skill ${s.level}`}>
                            <img className='icon' src={s.icon} alt="" />
                            {s.name} 
                            <div className='bar1'></div>
                            <div className='bar2'></div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Skills
