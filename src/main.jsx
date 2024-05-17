import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import './index.css';

const Root = () => {
  const [isBlack, setIsBlack] = useState(() => {
    // Retrieve color preference from local storage on component mount
    const storedColor = localStorage.getItem('Color');
    return storedColor ? JSON.parse(storedColor) : false;
  });

  const toggleColor = () => {
    setIsBlack(prevIsBlack => !prevIsBlack);
  };

  useEffect(() => {
    localStorage.setItem('Color', JSON.stringify(isBlack));
  }, [isBlack]);

  const pageStyle = {
    background: isBlack ? 'white' : 'rgb(23,20,18)',
    color: isBlack ? 'black' : 'white',
    height: '100%'
  };

  return (
    <div style={pageStyle}>

      <App toggleColor={toggleColor}  />
    </div>
  );
};

ReactDOM.render(<Root />, document.getElementById('root'));
