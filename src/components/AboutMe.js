// imports react
import React from 'react';
// imports profile picture
import joeys from '../assets/images/joey.jpg'
// aboutme function
function AboutMe() {

  // returns html for aboutme state
  return (
    <div className='d-flex flex-column align-items-center pb-5'>
      <h2>About Me</h2>
      <a href='https://github.com/joeyblue27'>
        <img src={joeys} alt="Joey Douek" height="200" width="200" className="image-link"></img>
      </a> 
      <p className='w-50 m-2 fs-3 mt-5'>
    Developing skills with computers and sound. I enjoy coding and producing music.
    Sound with computers fascinates me to learn more about it. Retro art and games are a passion of mine too. 
    I like learning about them and how they are made! 
     
      </p>
    </div>
  );
};
// exports aboutme function
export default AboutMe;
