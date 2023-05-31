
// imports css styling and portfolio content

import './assets/css/style.css';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';

import { useState } from 'react';

function App() {
  
// default to about

  const [currentTab, setCurrentTab] = useState('about');
  
  // nav choice display

  const renderTab = () => {
    switch (currentTab) {
      case 'about':
        return <About />;
        case 'portfolio':
          return <Portfolio />;
          case 'resume':
            return <Resume />;
      default:
        return <About />;
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
       <Footer />
      </div>
    </div>
  );
}

export default App;