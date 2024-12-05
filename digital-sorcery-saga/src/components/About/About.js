import React from 'react';
import './About.css';
const About = () => {
    return (
        
      <div className="about">
        <h2 className='title'>About the event</h2>
        <div className='description'>
          <div class="drop-cap"><h6>T</h6></div>
          <p className='first'>
            The Digital Sorcery Saga DSS, inspired by the Harry Potter film series, is an immersive event dedicated
            to graphic design, web development, and UIUX design that lasts for two weeks. Open to all enthusiasts of
            these fields, this event offers them the opportunity to work on stimulating projects and meet other professionals to enrich their network.
            <br />
            The themes are focused on current and relevant issues in the digital world, allowing participants
            to confront the real world challenges of their disciplines
          </p>
        </div>
        <button className="button">learn more</button>
      </div>
      

   
    )
}

export default About;