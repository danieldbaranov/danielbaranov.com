import React from 'react';
import './styles/App.css'

import headshot from '../public/DanielHeadshot.jpg';

function About() {
  return (
    <div id="about" className="full-page" style={{ display: "flex", flexDirection: 'row', justifyContent: 'center', alignItems: 'stretch', gap: '5%' }}>
      <div style={{ display: "flex", justifyItems: "center" }}>
        <img src={headshot} className='about-picture' alt="" />
      </div>
      <div className='about-text' data-avoid-ascii="true">
        <h1>About me</h1>
        <p>
          Hi, I'm Daniel Baranov, a BS/MS student at WPI exploring the intersection of systems thinking and artificial intelligence.
        </p>
        <p>
          I solve hard problems. At AMD, I navigated an undocumented codebase to deliver production features, earning an invitation back as a contractor. In research, I'm investigating Theory of Mind in LLMs while building my fundamentals through paper implementations and from-scratch neural networks.
        </p>
        <p>
          My approach: understand deeply, build pragmatically. Whether implementing computer vision algorithms from first principles or deploying full-stack applications, I focus on truly understanding what I'm building, not just making it work.
        </p>
        <p>
          When I'm not coding, I'm consuming stories (books, games, films) or picking up a new hobby. This constant rotation of interests feeds my creativity and keeps my technical work fresh.
        </p>
      </div>
    </div>
  );
}

export default About;
