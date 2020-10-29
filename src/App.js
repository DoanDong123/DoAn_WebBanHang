import React from 'react';
import './App.css';
import Header from './components/Header';
import RouterURL from './RouterURL/RouterURL';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <RouterURL></RouterURL>
      </div>
    </Router>
  );
}

export default App;
