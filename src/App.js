import React from 'react';
import './App.css';
import Header from './components/header/Header';
import About from './components/about/About';
import Experience from './components/experience/Experience';
import Footer from './components/footer/Footer';

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
      <Footer/>
    </div>
  );
}

export default App;
