// imports react
import React from 'react';

// style object for html styling footer is fixed to bottom of the page regardless of what gets rendered
const styles = {
    footer: {
        position: 'fixed',
        left: '0',
        bottom: '0',
        width: '100%',
    }
};
// footer function to generate footer html
function Footer() {
    // returns footer html code
    return (
        <footer style={styles.footer} className='Contacts'>
        </footer>
    );
};
// exports footer function
export default Footer;