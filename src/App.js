import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import RouterURL from './RouterURL/RouterURL';
import { BrowserRouter as Router } from 'react-router-dom';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <RouterURL></RouterURL>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
