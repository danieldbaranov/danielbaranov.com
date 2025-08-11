import React from 'react';
import './styles/App.css'

import github from './assets/githublogo.png';
import linkedin from './assets/linkedinlogo.png';


function Contacts() {
  return (
    <section id="contact" className="full-page" style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <h1>Contact Me</h1>
      </div>
      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly' }}>
        <a href="https://github.com/danieldbaranov">
          <img data-avoid-ascii="true"
            src={github} alt={"github"}
            className={"portfolio-logo"}
          />
        </a>
        <a href="https://www.linkedin.com/in/danielbaranov">
          <img data-avoid-ascii="true"
            src={linkedin} alt={"linkedin"}
            className={"portfolio-logo"} />
        </a>
      </div>
    </section>
  );
}

export default Contacts;
