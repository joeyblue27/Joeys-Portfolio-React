
import React from 'react';


function Navigation(props) {
    const styles = {
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
   
    return (
        <nav className='p-1' >
            <ul style={styles.ul} className="d-flex fs-2 text-white">
                {}
                <li 
                    style={currentTab === "about" ? styles.listactive : styles.list}
                    className={currentTab === "about" ? "active-tab list-group-item" : "list-group-item"}
                    
                    onClick={() => setCurrentTab("about")}>
                    About
                </li>
                <li
                    style={currentTab === "portfolio" ? styles.listactive : styles.list}
                    className={currentTab === "portfolio" ? "active-tab list-group-item" : "list-group-item"}
                    onClick={() => setCurrentTab("portfolio")}>
                    Portfolio
                </li>
                <li
                    style={currentTab === "resume" ? styles.listactive : styles.list} 
                    className={currentTab === "resume" ? "active-tab list-group-item" : "list-group-item"}
                    onClick={() => setCurrentTab("resume")}>
                    Resume
                </li>
            </ul>
        </nav >
    );
};

export default Navigation;