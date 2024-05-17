import React from "react";
import './Body.css';
import Profile from '../assets/Profile.jpg';

export default function Body() {
    return (
        <div className="body-container">
            <div className="body-content" id="about-me">
                <div className="profile-content">
                    <img src={Profile} alt='Profile Picture' className="profile-picture" />
                </div>
                <p className="introduction"><span className="name-highlight">I'm Serenfant Setoute</span>, frontend <br/>web developer based In New Jersey</p>
            </div>
            <article className="description-article">
                <p className="description-text">I am a passionate developer from northern Jersey, specializing in web development. I excel in creatively tackling problems and continuously learning new approaches. My enthusiasm for coding and commitment to professional growth drive me to deliver innovative solutions.</p>
            </article>
            <div className="portfolio-button-container">
                <button className="portfolio-button">View My Portfolio</button>
            </div>
            <div className="skills-container" id="skills">
                <h3 className="skills-heading">Skills</h3>
                <ul className="skills-list">
                    <li id="skill-html" className="skill-item">
                        <a target="_blank" href="https://icons8.com/icon/23027/html-5">
                            <img src="https://img.icons8.com/ios-filled/50/ffffff/html-5.png" alt="HTML 5 logo" />
                        </a>
                        <span>HTML 5</span>
                    </li>
                    <li id="skill-css" className="skill-item">
                        <a target="_blank" href="https://icons8.com/icon/21278/css3">
                            <img src="https://img.icons8.com/ios-filled/50/ffffff/css3.png" alt="CSS 3 logo" />
                        </a>
                        <span>CSS 3</span>
                    </li>
                    <li id="skill-js" className="skill-item">
                        <a target="_blank" href="https://icons8.com/icon/108784/javascript">
                            <img src="https://img.icons8.com/ios-filled/50/ffffff/javascript.png" alt="JavaScript logo" />
                        </a>
                        <span>JavaScript</span>
                    </li>
                    <li id="skill-react" className="skill-item">
                        <a target="_blank" href="https://icons8.com/icon/118830/react-native">
                            <img src="https://img.icons8.com/ios-filled/50/ffffff/react-native.png" alt="React logo" />
                        </a>
                        <span>React</span>
                    </li>
                    <li id="skill-git" className="skill-item">
                        <a target="_blank" href="https://icons8.com/icon/20906/git">
                            <img src="https://img.icons8.com/ios-filled/50/ffffff/git.png" alt="Git logo" />
                        </a>
                        <span>Git</span>
                    </li>
                    <li id="skill-sass" className="skill-item">
                        <a target="_blank" href="https://icons8.com/icon/21278/sass">
                            <img src="https://img.icons8.com/ios-filled/50/ffffff/sass.png" alt="Sass logo" />
                        </a>
                        <span>Sass</span>
                    </li>
                    <li id="skill-bootstrap" className="skill-item">
                        <a target="_blank" href="https://icons8.com/icon/21278/bootstrap">
                            <img src="https://img.icons8.com/ios-filled/50/ffffff/bootstrap.png" alt="Bootstrap logo" />
                        </a>
                        <span>Bootstrap</span>
                    </li>
                    <li id="skill-firebase" className="skill-item">
                        <a target="_blank" href="https://icons8.com/icon/21278/firebase">
                            <img src="https://img.icons8.com/ios-filled/50/ffffff/firebase.png" alt="Firebase logo" />
                        </a>
                        <span>Firebase</span>
                    </li>
                </ul>
            </div>
        </div>
    );
}
