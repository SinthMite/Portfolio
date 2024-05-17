import React, { useState } from 'react';
import './App.css';
import Header from './Header/Header';
import Body from './Body/Body';
import Project from './Project/Project';

function App({ toggleColor }) {
    return (
        <>
            <Header toggleColor={toggleColor} />
            <Body />
            <div id="projects">
                <Project />
            </div>
        </>
    );
}

export default App;
