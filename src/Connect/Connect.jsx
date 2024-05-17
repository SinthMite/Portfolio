import React, { useRef, useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import "./Connect.css";

export default function Connect({ openConnect, setOpenConnect }) {
    const [submitted, setSubmitted] = useState(false);
    const form = useRef();
    const containerRef = useRef();

    useEffect(() => {
        if (!openConnect) {
            setSubmitted(false);
        }
    }, [openConnect]);

    useEffect(() => {
        if (submitted) {

        }
    }, [submitted]);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (containerRef.current && !containerRef.current.contains(event.target)) {
                setOpenConnect(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [setOpenConnect]);

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
                setSubmitted(true);
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
                <div className="connect-container" ref={containerRef}>
                    <button className="close-button" onClick={() => setOpenConnect(false)}>X</button>
                    <h2 className="connect-title">Connect With Me</h2>
                    <form ref={form} onSubmit={sendEmail}>
                        <input type="text" placeholder="Name" name="user_name" required />
                        <input type="email" placeholder="Email" name="user_email" required />
                        <input type="text" placeholder="Subject" name="subject" required />
                        <textarea placeholder="Message" name="message" required></textarea>
                        <input type="text" className="bait" placeholder="Leave this field empty" />
                        <button type="submit" hidden={submitted}>Send</button>
                    </form>
                    {submitted && (
                        <h3 className="connect-success">Message Sent!</h3>
                    )}
                </div>
            )}
        </>
    );
}