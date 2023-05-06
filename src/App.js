
import './assets/css/style.css';


import Header from './components/Header';

import AboutMe from './components/AboutMe';
import Portfolio from './components/Portfolio';


import { useState } from 'react';

function App() {
  
  const [currentTab, setCurrentTab] = useState('about');
  
  const renderTab = () => {
    switch (currentTab) {
      case 'about':
        return <AboutMe />;
        case 'portfolio':
          return <Portfolio />;
      default:
        return <AboutMe />;
    };
  };  
  return (
    
    <div>
      <div>
        <Header
          currentTab={currentTab}
          setCurrentTab={setCurrentTab}
        />
      </div>
      <div>
        {renderTab()}
      </div>
      <div>
       
      </div>
    </div>
  );
}

export default App;