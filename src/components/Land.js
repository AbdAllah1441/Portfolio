import avatar from "../images/profile-pic.png"
import "./Land.scss"
import github from "../images/github.svg"
import linkedin from "../images/icons8-linkedin-circled.svg"
import gmail from "../images/gmail-svgrepo-com.svg"
import resume from "../images/Resume.pdf";
import { useEffect, useState } from "react"

const Land = () => {
    const [rendered, setRendered] = useState();
    
    const socials = [
        {
            icon: linkedin,
            url: "https://www.linkedin.com/in/abdallah1441",
        },
        {
            icon: github,
            url: "https://github.com/AbdAllah1441",
        },
        {
            icon: gmail,
            url: "mailto:abdullahmostafa9957@gmail.com"
        }
    ];

    useEffect(() => {
        setRendered(true);
    }, [])

    return (
        <div className={`land ${rendered ? "selected" : ""}`}>
            <div className='declare'>
                <div className='who'>
                    <div className='hello'>
                        <p>Hello,</p>
                        <p>I'm <span>AbdAllah</span></p>
                        <p>Software Engineer</p>
                        <div className='links'>
                            {socials.map((e) => <div className="link_container"><a href={e.url}
                                target="_blank" rel="noreferrer">
                                <img src={e.icon} alt='ggg' /></a></div> )}
                        </div>
                        <a className='cv' href={resume} download>Download CV</a>
                    </div>
                </div>
                <div className='avatar'>
                    <img src={avatar} alt='' />
                </div>
            </div>
        </div>
    )
}

export default Land
