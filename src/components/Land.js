import React from 'react'
import avatar from "../images/profile-pic.png"
import "./Land.scss"
import github from "../images/github.svg"
import linkedin from "../images/icons8-linkedin-circled.svg"
import gmail from "../images/gmail-svgrepo-com.svg"

const Land = () => {
    const socials = [
        {
            icon: linkedin,
            url: "https://www.linkedin.com/in/ِabdallah1441",
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

    return (
        <div className='land'>
            <div className='declare'>
                <div className='who'>
                    <div className='hello'>
                        <p>Hello,</p>
                        <p>I'm <span>AbdAllah</span></p>
                        <p>A Front End Engineer</p>
                        <div className='links'>
                            {socials.map((e) => <a href={e.url}
                                target="_blank" rel="noreferrer">
                                <img src={e.icon} alt='ggg' /></a>)}
                        </div>
                        <a className='cv' href='http://localhost:3000/Resume.pdf' download>Download CV</a>
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
