// imports react
import React from 'react';
// imports profile picture
import joeys from '../assets/images/joey.jpg'




// aboutme function
function AboutMe() {

  // returns html for aboutme state
  return (


    <div>
        <img id="photo" src={joeys} alt="Joey Douek" height="250" width="250" className="rounded-circle border border-2 border-white"></img>
     
      <div className='d-flex flex-column align-items-center pb-5'>
      <p className='w-25'>
        Hi, My name is Joey. Computers and sound has been a craft of mine for quite sometime. 
        Being a musician and learning how to code has enabled me to express myself in many ways. 
        Retro art and gaming are other passions of mine.  
    
      </p>
      </div>
    </div>
    
  );
};
// exports aboutme function
export default AboutMe;
