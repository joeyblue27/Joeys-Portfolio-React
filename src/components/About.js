// import links and react

import React from 'react';
import joeys from '../assets/images/joey.jpg'
import gmail from '../assets/images/gmail.png'
import linkedin from '../assets/images/linkedin.png'
import github from '../assets/images/github.png'

// render html about page

function About() {

 
  return (

    <div>
        <img id="photo" src={joeys} alt="Joey Douek" height="250" className="rounded-circle border border-2 border-dark"></img>

      <div className='d-flex flex-column align-items-center'>
      <p className='w-50'>
      Hi, My name is Joey. I am a full stack web developer with an active focus on creating app design and development. I look forward into developing new software and products that enhance our everyday life. 
      </p>
      </div>
      
      
    
      <section id='links'>
        <h2>Contacts!</h2>
      <a href="mailto:joey.douek@gmail.com">
      <img id='contact' src={gmail} alt="Joey Douek" height="100" width="100"></img>
      </a> 
      <a href="https://github.com/joeyblue27">
      <img id='contact' src={github} alt="Joey Douek" height="100" width="100"></img>
      </a>
      <a href="https://www.linkedin.com/in/joey-douek-279908273">
      <img id='contact' src={linkedin} alt="Joey Douek" height="100" width="100"></img>
      </a>
      </section> 
    </div>
    
  );
};

export default About;

