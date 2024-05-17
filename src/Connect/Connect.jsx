import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import "./Connect.css";

export default function Connect({ openConnect, setOpenConnect }) {
    const form = useRef();

    // Log the environment variable to check if it's loaded
    console.log('API Key:', import.meta.env.VITE_EMAILJS_API_KEY);

    const sendEmail = (e) => {
        e.preventDefault();

        // Honeypot check
        if (form.current.querySelector('.bait').value) {
            console.log('Bot detected, form not submitted');
            return;
        }

        emailjs.sendForm(
            import.meta.env.VITE_EMAILJS_SERVICE_ID, 
            import.meta.env.VITE_EMAILJS_TEMPLATE_ID, 
            form.current, 
            import.meta.env.VITE_EMAILJS_API_KEY
        )
        .then(
            (result) => {
                console.log('SUCCESS!', result.text);
            },
            (error) => {
                console.log('FAILED...', error.text);
            }
        );
    };

    return (
        <>
            {openConnect && (
                <div className="connect-container">
                    <button className="close-button" onClick={() => setOpenConnect(false)}>X</button>
                    <h2 className="connect-title">Connect With Me</h2>
                    <form ref={form} onSubmit={sendEmail}>
                        <input type="text" placeholder="Name" name="user_name" required />
                        <input type="email" placeholder="Email" name="user_email" required />
                        <input type="text" placeholder="Subject" name="subject" required />
                        <textarea placeholder="Message" name="message" required></textarea>
                        <input type="text" className="bait" placeholder="Leave this field empty" />
                        <button type="submit">Send</button>
                    </form>
                </div>
            )}
        </>
    );
}
