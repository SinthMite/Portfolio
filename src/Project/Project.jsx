import React from "react";
import './Project.css';
import StormAtlas from '../assets/StormAtlas.png';
import FlavorQuest from '../assets/FlavorQuest.png';

export default function Project() {
    return (
        <div className="project-container">
            <h2 className="project-title">Projects</h2>
        
            <div className="project-item">
                <h3 className="project-name">FlavorQuest</h3>
                <img src={FlavorQuest} alt="FlavorQuest" className="project-image" />
                <article className="project-description">
                    <p>"FlavorQuest" is a culinary exploration app designed to help users discover new recipes and cooking techniques. The application features robust search functionality, personalized meal planning, and seamless user authentication.</p>
                </article>
                <ul className="project-features">
                    <li>User Authentication:</li>
                    <li>React: Dynamic UI.</li>
                    <li>Firebase: Authentication and Firestore database.</li>
                    <li>Spoonacular API: Recipe data.</li>
                    <li>CSS: Custom styling.</li>
                    <li>Material-UI: Modern design.</li>
                    <li>React Router: Navigation.</li>
                    <li>Local Storage: Persist login state.</li>
                </ul>
            </div>

            <div className="project-item">
                <h3 className="project-name">StormAtlas</h3>
                <img src={StormAtlas} alt="StormAtlas" className="project-image" />
                <article className="project-description">
                    <p>"StormAtlas" is a React-based web application that allows users to track weather conditions, view earthquake occurrences, and analyze weather trends. It integrates with external APIs to fetch real-time weather data and relevant news articles. The use of interactive maps enhances the user experience by visualizing geographical data effectively.</p>
                </article>
                <ul className="project-features">
                    <li>React: The project is built using React, a JavaScript library for building user interfaces.</li>
                    <li>React Router: Utilized for handling navigation within the application by defining routes for different pages.</li>
                    <li>React Leaflet: Used for displaying interactive maps in the Earthquake Page and Home Page.</li>
                    <li>API Integration: Utilizes APIs such as OpenWeatherMap and NewsAPI for fetching weather data and news articles respectively.</li>
                    <li>CSS Styling: Custom styling is applied using CSS to enhance the visual presentation of the application.</li>
                </ul>
            </div>
        </div>
    );
}
