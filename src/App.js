import React from 'react';
import './App.css';
import HeaderComponent from './components/header/header';
import InConstruction from './pages/in-construction/inConstruction';

function App() {
  return (
    <div className="App">
      <HeaderComponent></HeaderComponent>
      <div className="page-content-wrap">
        <InConstruction></InConstruction>
      </div>
    </div>
  );
}

export default App;
