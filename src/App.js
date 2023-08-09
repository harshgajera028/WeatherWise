import React from 'react';
import './App.css';
import Weather from './components/Weather';
import Fot from './components/Fot';


function App() {
  return (
    <div>
      <div className="App">
        <Weather />

      </div>
      <div>
        <Fot/>
      </div>
    </div>




  );
}

export default App;
