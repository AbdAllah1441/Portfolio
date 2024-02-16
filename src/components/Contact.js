import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import "./Contact.scss";

const Contact = () => {
    const form = useRef();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
            .sendForm('service_om8ve0i', 'template_06ijj49', form.current, {
            publicKey: 'qb97N_y1_K_w9UJt0',
            })
            .then(
            () => {
                console.log('SUCCESS!');
            },
            (error) => {
                console.log('FAILED...', error.text);
            },
        );
    };

    return (
        <div className='contact'>
            <form ref={form} onSubmit={sendEmail}>
                <h1>Contact Me</h1>
                <div className="in_container">                
                    <label>
                        <div className='in_title'>Name</div>
                        <input className='in' type="text" name="from_name" value={name} placeholder='Your Name'
                        onChange={(e) => setName(e.target.value)} />
                    </label>
                    <label>
                        <div className='in_title'>Email</div>
                        <input className='in' type="email" name="form_email" value={email} placeholder='Your Email'
                        onChange={(e) => setEmail(e.target.value)} />
                    </label>
                </div>
                <label>
                    <div className='in_title'>Message</div>
                    <textarea  name="message" value={message} placeholder='Your Message'
                    onChange={(e) => setMessage(e.target.value) } />
                </label>
                <input className='btn' type="submit" value="Send" />
            </form>
        </div>
    )
}

export default Contact