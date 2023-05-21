
import React from 'react';

import resume from '../assets/images/Resume.pdf';



function Resume() {
  return (
    <section>
      <div>
        <h3>Resume</h3>
        <a href={resume} target="_blank" rel="noopener noreferrer">
          <button>Download</button>
        </a>
      </div>
      
    </section>
  );
};

export default Resume;