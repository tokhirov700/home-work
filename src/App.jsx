import React, { useState, useRef } from 'react';
import './App.css';
import nasheed from './audio/nasheed.m4a'; 

function App() {
  const [count, setCount] = useState(0);
  const audioRef = useRef(null);

  const handleClick = () => {
    setCount(prevCount => {
      const newCount = prevCount + 1;
      if (newCount === 33 || newCount === 66 || newCount === 99) {
        audioRef.current.play();
      } else if (newCount === 34 || newCount === 67 || newCount === 100) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0; 
      }
      return newCount > 99 ? 0 : newCount;
    });
  };

  const handleReset = () => {
    setCount(0);
    audioRef.current.pause();
    audioRef.current.currentTime = 0; 
  };

  return (
    <div className="container">
      <h1 className="counter">Tasbiq: {count}</h1>
      <button className="button" onClick={handleClick}>+1</button>
      <button className="reset-button" onClick={handleReset}>Reset</button>
      <audio ref={audioRef} src={nasheed} className="hidden-audio" />
    </div>
  );
}

export default App;

