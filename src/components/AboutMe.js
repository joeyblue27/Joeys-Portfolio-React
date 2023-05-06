
import React from 'react';

import joeys from '../assets/images/joey.jpg'





function AboutMe() {

 
  return (


    <div>
        <img id="photo" src={joeys} alt="Joey Douek" height="250" width="250" className="rounded-circle border border-2 border-white"></img>
     
      <div className='d-flex flex-column align-items-center pb-5'>
      <p className='w-25'>
      Hi, My name is Joey. Computers and sound has been a craft of mine for quite sometime. Previous work experiences have been in IT hardware support and retail selling. My career path will be moving towards coding development.
    
      </p>
      </div>
    </div>
    
  );
};

export default AboutMe;
