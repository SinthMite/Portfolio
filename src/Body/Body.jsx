import React from "react";
import './Body.css'
import Profile from '../assets/Profile.jpg'
export default function Body(){
    return(
        <div className="body-container">
            <div className="body-content">
                <div className="profile-content">
                    <img src={Profile} alt='Profile Picture' />
                </div>
                <p><span>I'm Serenfant Setoute</span>, frontend <br/>developer based In New Jersey</p>
            </div>
            <div className="portfolio-button">
                <button>View My Portfolio</button>
            </div>
        </div>
    )
}