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
        <img id="photo" src={joeys} alt="Joey Douek" height="300" width="250" className="rounded-circle border border-2 border-white"></img>

      <div className='d-flex flex-column align-items-center pb-5'>
      <p className='w-25'>
      Hi, My name is Joey. Computer hardware and software has been a passion of mine. My work experiences have been in IT support and retail sales. My career path will be moving towards software development.
      </p>
      </div>
      
      <h2>Contacts!</h2>
    
      <section id='links'>
      <a href="mailto:joey.douek@gmail.com">
      <img src={gmail} alt="Joey Douek" height="100" width="100"></img>
      </a> 
      <a href="https://github.com/joeyblue27">
      <img src={github} alt="Joey Douek" height="100" width="100"></img>
      </a>
      <a href="https://www.linkedin.com/in/joey-douek-279908273">
      <img src={linkedin} alt="Joey Douek" height="100" width="100"></img>
      </a>
      </section> 
    </div>
    
  );
};

export default About;

