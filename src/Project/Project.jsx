import React from "react";
import './Project.css';
import StormAtlas from '../assets/StormAtlas.png';
import NourishPaw from '../assets/Nourish.mp4';
import Storm from '../assets/Storm.mp4'
import FlavorQuest from '../assets/tempFQ.mp4'
export default function Project() {
    return (
        <div className="project-container">
            <h2 className="project-title">Projects</h2>

            <div className="project-item">
                <h3 className="project-name">NourishPaw</h3>
                <video src={NourishPaw} className="project-image" autoPlay muted loop playsInline></video>
                <div className="project-links">
                    <a href="https://main--nourishpaw.netlify.app/" target="_blank" rel="noopener noreferrer">Live Project</a> | 
                    <a href="https://github.com/SinthMite/NourishPaw" target="_blank" rel="noopener noreferrer">GitHub Repository</a>
                </div>
                <div className="project-textHolding">
                    <article className="project-description">
                        <h3>Summary</h3>
                        <p>"NourishPaw" helps pet owners provide the best nutrition for their pets. Users can manage pet profiles, get personalized meal plans, track nutrition, and find related dog food products.</p>
                    </article>
                    <ul className="project-features">
                        <h3>Features</h3>
                        <li>User Authentication</li>
                        <li>React</li>
                        <li>Firebase</li>
                        <li>Google Custom Search API</li>
                        <li>SCSS</li>
                        <li>React Router</li>
                        <li>Fetch API</li>
                        <li>String Similarity</li>
                    </ul>
                </div>
            </div>
            <div className="project-item">
                <h3 className="project-name">StormAtlas</h3>
                <video src={Storm} className="project-image" autoPlay muted loop playsInline></video>
                <div className="project-links">
                    <a href="https://sinthmite.github.io/StormAtlas/" target="_blank" rel="noopener noreferrer">Live Project</a> | 
                    <a href="https://github.com/SinthMite/StormAtlas" target="_blank" rel="noopener noreferrer">GitHub Repository</a>
                </div>                
                <div className="project-textHolding">
                    <article className="project-description">
                        <h3>Summary</h3>
                        <p>"StormAtlas" is a React-based web application that allows users to track weather conditions, view earthquake occurrences, and analyze weather trends. It integrates with external APIs to fetch real-time weather data and relevant news articles. The use of interactive maps enhances the user experience by visualizing geographical data effectively.</p>
                    </article>
                    <ul className="project-features">
                        <h3>Features</h3>
                        <li>React</li>
                        <li>React Router</li>
                        <li>React Leaflet</li>
                        <li>API Integration</li>
                        <li>CSS Styling</li>
                    </ul>
                </div>
            </div>

            <div className="project-item">
                <h3 className="project-name">FlavorQuest</h3>
                <video src={FlavorQuest} className="project-image" autoPlay muted loop playsInline></video>
                <div className="project-links">
                    <a href="https://flavorquests.netlify.app/" target="_blank" rel="noopener noreferrer">Live Project</a> | 
                    <a href="https://github.com/SinthMite/FlavorQuest" target="_blank" rel="noopener noreferrer">GitHub Repository</a>
                </div>                 <div className="project-textHolding">
                    <article className="project-description">
                        <h3>Summary</h3>
                        <p>"FlavorQuest" is a culinary exploration app designed to help users discover new recipes and cooking techniques. The application features robust search functionality, personalized meal planning, and seamless user authentication.</p>
                    </article>
                    <ul className="project-features">
                        <h3>Features</h3>
                        <li>User Authentication</li>
                        <li>React</li>
                        <li>Firebase</li>
                        <li>Spoonacular API</li>
                        <li>CSS</li>
                        <li>Material-UI</li>
                        <li>React Router</li>
                        <li>Local Storage</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
