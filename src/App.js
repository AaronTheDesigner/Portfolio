import React, { Component } from 'react';
import Navigation from './Containers/Nav';
import Home from './Containers/Home';
import Spanone from './Containers/Span_1';
import Projects from './Containers/Projects';
import Footer from './Containers/Footer';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className = "container-fluid">
        <Navigation />
        <Home />
        <Spanone />
        <Projects />
        <Footer />        
      </div>
    );
  }
}

export default App;
