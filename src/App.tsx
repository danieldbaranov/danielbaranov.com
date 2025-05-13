import React from 'react';
import './App.css';

let PUBLIC_URL = '../public'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={'/DanielHeadshot.jpg'} className="App-logo" alt="logo" />
        <div>
            <p>
                The official website of Daniel Baranov.
            </p>
            <div className={"logo-bar"}>
                <a href="https://github.com/danieldbaranov">
                    <img
                        src={'/githublogo.png'} alt={"github"}
                        className={"portfolio-logo"}
                    />
                </a>
                <a href="https://www.linkedin.com/in/danielbaranov">
                    <img src="/linkedinlogo.png" alt={"linkedin"}
                         className={"portfolio-logo"}/>
                </a>
            </div>

        </div>
      </header>
    </div>
  );
}

export default App;
