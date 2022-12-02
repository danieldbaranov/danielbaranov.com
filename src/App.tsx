import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={process.env.PUBLIC_URL + '/DanielHeadshot.jpg'} className="App-logo" alt="logo" />
        <div>
            <p>
                The official website of Daniel Baranov.
            </p>
            <div className={"logo-bar"}>
                <a href="https://github.com/danieldbaranov">
                    <img
                        src={process.env.PUBLIC_URL + '/githublogo.png'} alt={"github"}
                        className={"portfolio-logo"}
                    />
                </a>
                <a href="https://www.linkedin.com/in/danielbaranov">
                    <img src={process.env.PUBLIC_URL + '/linkedinlogo.png'} alt={"linkedin"}
                         className={"portfolio-logo"}/>
                </a>
            </div>

        </div>
      </header>
    </div>
  );
}

export default App;
