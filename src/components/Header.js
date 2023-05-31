
import React from 'react';

import Navigation from './Navigation';

// sets current navigation tab

function Header(props) {
   
    const { currentTab, setCurrentTab } = props;
   // nav flex 
    return (
        <header className='d-flex flex-column align-items-center border border-2 py-4'>
      
            <Navigation
                currentTab={currentTab}
                setCurrentTab={setCurrentTab}>
            </Navigation>
        </header>
    );
};

export default Header;