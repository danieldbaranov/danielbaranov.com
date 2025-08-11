import React from 'react';
import AsciiBackground from './AsciiBackground';

import './styles/App.css';

function Home () {
  return(
    <section id="home" className="full-page" style={{display: "flex", position: 'relative', overflow: 'hidden', height: '80vh'}}>
      <AsciiBackground />
      <div style={{display: "flex", flexDirection: 'column', alignSelf: 'center', zIndex: 1, position: 'relative'}}>
        <h1>
          <span data-avoid-ascii="true">Hi, I'm</span>
          <br/>
          <span data-avoid-ascii="true">Daniel Baranov</span>
        </h1>
        {/* <h2 data-avoid-ascii="true">I make machines <i>learn.</i></h2> */}
      </div>
    </section>
  );
}

export default Home;
