
import React from 'react';

import Navigation from './Navigation';

function Header(props) {
   
    const { currentTab, setCurrentTab } = props;
   
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