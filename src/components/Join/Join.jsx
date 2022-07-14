import React, { useRef } from 'react';
import './join.css';
import emailjs from '@emailjs/browser'

const Join = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_ejgcmqp', 'template_we1hesf', form.current,
         's-ou2ILPigjh0m_Xb')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };
    return (
        <div className="Join" id="Join">
            <div className="leftJ">
                <hr />
                <div>
                    <span className='stroke-text'>READY TO</span>
                    <span> LEVEL UP</span>
                </div>
                <div>
                    <span>YOUR BODY</span>
                    <span className='stroke-text'>WITH US?</span>
                </div>
            </div>
            <div className="rightJ">
                <form ref={form} className="emailContainer" onSubmit={sendEmail}>
                    <input type="email" name='user_email' placeholder='Enter your Email Address' />
                    <button type='submit' className='btn btnJ'>Join Now</button>
                </form>
            </div>
        </div>
    )
}

export default Join
