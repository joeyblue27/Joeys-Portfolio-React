// imports react
import React from 'react';
// imports navigation function from navigation.js
import Navigation from './Navigation';
// header function that renders the header with the nav bar
function Header(props) {
    // establishes the props that will be used in the navigation function
    const { currentTab, setCurrentTab } = props;
    // returns header html includes props for navigation function
    return (
        <header className='d-flex flex-column align-items-center bg-info py-4'>
      
            <Navigation
                currentTab={currentTab}
                setCurrentTab={setCurrentTab}>
            </Navigation>
        </header>
    );
};
// exports header function
export default Header;