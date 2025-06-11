import React from 'react';

import './styles/App.css';

function Home () {
  return(
    <section id="home" className="full-page" style={{display: "flex", position: 'relative', overflow: 'hidden'}}>
      <div style={{display: "flex", flexDirection: 'column', alignSelf: 'center', zIndex: 1, position: 'relative'}}>
        <h1>Hi, I'm <br/> Daniel Baranov</h1>
        <h2>I create <em>human-focused</em> systems</h2>
      </div>
    </section>
  );
}

export default Home;
