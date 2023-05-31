
import React from 'react';

// nav tab 

function Navigation(props) {
    const nav = {
        ul: {
            margin: '0',
            
            
        },
        list: {
            padding: '0 5em',
            
        },
        listactive: {
            padding: '0 5em',

        }
    };
   
    const { currentTab, setCurrentTab } = props;
   
// nav tab render html

    return (
        <nav className='p-1' >
            <ul style={nav.ul} className="d-flex fs-2 text-white">
                {}
                <li 
                    style={currentTab === "about" ? nav.listactive : nav.list}
                    className={currentTab === "about" ? "tab nav" : "nav"}
                    onClick={() => setCurrentTab("about")}>
                    About
                </li>
                <li
                    style={currentTab === "portfolio" ? nav.listactive : nav.list}
                    className={currentTab === "portfolio" ? "tab nav" : "nav"}
                    onClick={() => setCurrentTab("portfolio")}>
                    Portfolio
                </li>
                <li
                    style={currentTab === "resume" ? nav.listactive : nav.list} 
                    className={currentTab === "resume" ? "tab nav" : "nav"}
                    onClick={() => setCurrentTab("resume")}>
                    Resume
                </li>
            </ul>
        </nav >
    );
};

export default Navigation;