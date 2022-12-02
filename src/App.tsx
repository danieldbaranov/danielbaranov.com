import React from 'react';
import headshot from './DanielHeadshot.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={headshot} className="App-logo" alt="logo" />
        <p>
          Official Daniel Baranov website coming soon!
        </p>
        <a
          className="App-link"
          href="https://github.com/danieldbaranov"
          target="_blank"
          rel="noopener noreferrer"
        >
          Be there or be 🟦
        </a>
      </header>
    </div>
  );
}

export default App;
