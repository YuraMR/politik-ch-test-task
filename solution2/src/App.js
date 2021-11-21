import React from 'react';

import CouncillorsList from "./components/CouncillorsList";

import logo from './logo.svg';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <CouncillorsList />
      </header>
    </div>
  );
}

export default App;
