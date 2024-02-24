import React, { useEffect, useState } from 'react'
import "./Projects.scss";

const Projects = () => {
    const projects = [{name: "So2alak", description: "A web application that makes a collaborative community of the college students.It enables them to ask each other and answer. It also allows teachers to answer and verify other students answers.", link: "https://github.com/Mans1611/So2alak"},
        {name: "AI-ChatBOT", description: "A web application designed to engage users in dynamic conversations, offering personalized responses, information retrieval, and task assistance, enhancing user experience and efficiency in various domains.", link: "https://github.com/AbdAllah1441/AI-CahtBOT"},
        {name: "Expense Tracker", description: "A web application designed to efficiently track personal finances, add, edit, and delete expenses. It is integrated with local storage to save user data.", link: "https://github.com/AbdAllah1441/Expense-Tracker"},
        {name: "Social Network Analyst", description: "A C++ application that gets an XML file containing the network users from the user and build a graph of this network in addition to making different analytics on it.", link: "https://github.com/AbdAllah1441/Network-Analysis-Application"},
        {name: "Tiny Language Parser", description: "A python application that gets a snippet code of tiny language from the user. It scans the code to get its tokens, then it uses these tokens in parsing and drawing the syntax tree.", link: "https://github.com/AbdAllah1441/Tiny-Language-Parser"}, 
        {name: "CPU Scheduler", description: "A python application of CPU process scheduler that schedules the processes of the system using several scheduling algorithms statically and dynamically (FCFS/SJF-P/SJF-NP/Priority-P/PriorityNP/Round Robin).", link: "https://github.com/AbdAllah1441/CPU-Scheduler"}]
    
        const [rendered, setRendered] = useState();

        useEffect(() => {
            setRendered(true);
        }, [])

        return (
        <div className = {`projects_container ${rendered ? "selected" : "" }`}>
            <h1>My Projects</h1>
            <div className="content">            
                <div className="projects">
                    {projects.map((p) => 
                        <a target='blank' href={p.link} className = {`project`}>
                            <div className='name'>{p.name} </div>
                            <div className='description'>{p.description}</div>
                        </a>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Projects
