
import React from 'react';

import resume from '../assets/images/jdouekresume.pdf';

// html resume download link

function Resume() {
  return (
    <section>
      <div>   
<div className='d-flex flex-column align-items-center pb-5'>
      <p className='w-75'>Full Stack Web Developer with a strong background in web
design and maintenance. Experienced in creating and managing online stores. Seeking
a challenging position to utilize my technical skills and contribute to the success of a
dynamic organization.</p>
      </div>
        <p>Resume</p>
        <a href={resume} target="_blank" rel="noopener noreferrer">
          <button>Download</button>
        </a>
      </div>
      
    </section>
  );
};

export default Resume;