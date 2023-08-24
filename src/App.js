import React from 'react';
import './App.css';
import Header from './components/header/Header';
import HeaderSocials from './components/header/HeaderSocials';
import About from './components/about/About';
import Experience from './components/experience/Experience';

function App() {
  return (
    <div className="flex flex-col items-center space-y-40">
      <Header />

     
      <div className="mb-4 self-center">
        <a href="#about" className="scroll__down">
          Scroll Down &#x2192;
        </a>
      </div>
      <About />
      <Experience />
    </div>
  );
}

export default App;
