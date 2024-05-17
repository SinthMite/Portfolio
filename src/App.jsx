import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './Header/Header';
import Body from './Body/Body';
import Project from './Project/Project';
import Connect from './Connect/Connect';

function App({ toggleColor }) {
  const [openConnect, setOpenConnect] = useState(false);
  useEffect(() => {
    document.body.classList.add('slide-in');
}, []);
    return (
        <>
            <Header toggleColor={toggleColor}setOpenConnect={setOpenConnect} />
            <Connect openConnect={openConnect} setOpenConnect={setOpenConnect} />
            <Body />
            <div id="projects">
                <Project />
            </div>
        </>
    );
}

export default App;
