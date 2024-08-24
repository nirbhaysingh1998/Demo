import { useState } from 'react'

import './App.css'
import First from './Components/first';
import Second from './Components/second';
import Third from './Components/third';
import Final from './Components/final';

function App() {
  const [currentComponent, setCurrentComponent] = useState('First');

  const handleYes = () => {
    if (currentComponent === 'First') {
      setCurrentComponent('Final');
    } else if (currentComponent === 'Second') {
      setCurrentComponent('Final');
    } else if (currentComponent === 'Third') {
      setCurrentComponent('Final');
    }
  };

  const handleNo = () => {
    if (currentComponent === 'First') {
      setCurrentComponent('Second');
    } else if (currentComponent === 'Second') {
      setCurrentComponent('Third');
    }
    // For Component C, do nothing on No
  };

  const renderComponent = () => {
    switch (currentComponent) {
      case 'First':
        return < First onYes={handleYes} onNo={handleNo} />;
      case 'Second':
        return <Second onYes={handleYes} onNo={handleNo} />;
      case 'Third':
        return <Third onYes={handleYes} />;
      case 'Final':
        return <Final />;
      default:
        return <div>Unknown component</div>;
    }
  };

  return <div>{renderComponent()}</div>;
};

export default App;