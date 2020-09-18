import React from 'react';
// import {BrowserRouter as Router} from 'react-router-dom'
import './App.css';
import FontConverter from './Components/FontConverter/FontConverter';
import Header from './Components/Header/Header';
import Info from './Components/Info/Info';


function App() {
  return (
    <div className="App">
        <Header />
        <Info />
        <FontConverter />
    </div>
  );
}

export default App;
