
import React from 'react';


const styling = {
    footer: {
        position: 'fixed',
        left: '0',
        bottom: '0',
        width: '100%',
        backgroundColor: 'lightblue',
    }
};

function Footer() {
 
    return (
        <footer style={styling.footer} className='d-flex justify-content-evenly align-items-center'>
            <a href="mailto:joey.douek@gmail.com">
            joey.douek@gmail.com
      </a> 
      <a href="https://github.com/joeyblue27">
      github
      </a>
      <a href="https://www.linkedin.com/in/joey-douek-279908273">
      linkedin
      </a>
        </footer>
    );
};

export default Footer;