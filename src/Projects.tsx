import React from 'react';
import './styles/App.css'

function ProjectGrid () {
  const items = [
    {id: 1, title: "Item 1", description: "This is item 1" },
    {id: 2, title: "Item 2", description: "This is item 2" },
    {id: 3, title: "Item 3", description: "This is item 3" },
    {id: 4, title: "Item 4", description: "This is item 4" },
  ];

  return (
    <div style={{display:"flex", justifyContent: 'space-evenly'}}>
      {items.map((item) => (
        <div
          key={item.id}
        >
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  )
};

function Projects () {
  return(
    <div id="page" style={{display: 'flex', flexDirection:'column'}}>
      <h1>Projects</h1>
      <ProjectGrid/>
    </div>
  );
}

export default Projects;
