import React from 'react';
import './styles/App.css'

function Contacts () {
  return(
    <section id="contact" className="full-page" style={{display:'flex', justifyContent:'center', flexDirection:'column'}}>
      <div style={{display: "flex", justifyContent: "center"}}>
        <h1>Contact Me</h1>
      </div>
      <div style={{display:'flex', flexDirection:'row', justifyContent:'space-evenly'}}>
        <a href="https://github.com/danieldbaranov">
            <img data-avoid-ascii="true"
                src={'/githublogo.png'} alt={"github"}
                className={"portfolio-logo"}
            />
        </a>
        <a href="https://www.linkedin.com/in/danielbaranov">
            <img data-avoid-ascii="true"
              src={'/linkedinlogo.png'} alt={"linkedin"}
              className={"portfolio-logo"}/>
        </a>
      </div>
    </section>
  );
}

export default Contacts;
