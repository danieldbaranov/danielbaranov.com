import React from 'react';
import './styles/App.css'

function About () {
  return(
    <div id="about" className="full-page" style={{display: "flex", flexDirection: 'row', justifyContent: 'center', alignItems: 'stretch', gap: '5%'}}>
      <div>
        <img src="./DanielHeadshot.jpg" className='about-picture'/>
      </div>
      <div className='about-text'>
        <h1>About me</h1>
        <p>
          Hi, I'm Daniel Baranov. 
          I am simutaneously pursuing a B.S. in Computer Science and an M.S. in Artificial Intelligence. 
          I'm especially passionate about human-centered AI: building systems that empower people and enhance lives, rather than replace them.
        </p>
        <p>
          I’ve had the opportunity to gain industry experience at AMD, where I worked as both an intern and later a contractor. 
          I also began exploring tech early on through an internship at Boston College during high school. 
          These experiences have helped shape my approach to problem-solving and deepened my interest in dynamic and modular solutions, such as AI.
        </p>
        <p>
          My goal is to harness AI for social good—designing intelligent systems that are ethical, accessible, and aligned with human values. 
          Whether it’s in education, healthcare, or community-focused tech, I believe AI should be a tool for positive change.
        </p>
        <p>
          Outside of my academic and professional work, I’m a lover of all forms of storytelling—books, games, movies, and shows—and I enjoy rotating through new hobbies to keep life interesting and ideas flowing.
        </p>
      </div>
    </div>
  );
}

export default About;
