import React from "react";
import "./Connect.css";

export default function Connect({ openConnect, setOpenConnect }) {
    return (
        <>
            {openConnect && (
                <div className="connect-container">
                    <button className="close-button" onClick={() => setOpenConnect(false)}>X</button>
                    <h2 className="connect-title">Connect With Me</h2>
                    <form>
                        <input type="text" placeholder="Name" />
                        <input type="email" placeholder="Email" />
                        <input type="text" placeholder="Subject" />
                        <textarea placeholder="Message"></textarea>
                        <button type="submit">Send</button>
                    </form>
                </div>
            )}
        </>
    );
}
