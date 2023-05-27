
import React from 'react';

import joeys from '../assets/images/joey.jpg'
import gmail from '../assets/images/gmail.png'
import linkedin from '../assets/images/linkedin.png'
import github from '../assets/images/github.png'





function AboutMe() {

 
  return (

<main>
    <div>
        <img id="photo" src={joeys} alt="Joey Douek" height="250" width="250" className="rounded-circle border border-2 border-white"></img>
     
      <div className='d-flex flex-column align-items-center pb-5'>
      <p className='w-25'>
      Hi, My name is Joey. Computers and sound has been a craft of mine for quite sometime. Previous work experiences have been in IT hardware support and sales. My career path will be moving towards software development.
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
    </main>

    
  );
};

export default AboutMe;

