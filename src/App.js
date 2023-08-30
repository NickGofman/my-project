import React from 'react';
import './App.css';
import Header from './components/header/Header';
import About from './components/about/About';
import Experience from './components/experience/Experience';
import Footer from './components/footer/Footer';
import Contact from './components/contact/Contact';
import Portfolio from './components/portfolio/Portfolio';

function App() {
  return (
    <div className="flex flex-col items-center ">
      <Header />
      <main className="flex flex-col flex-1 items-center bg-transparent justify-center space-y-36 mb-8 ">
        <About />
        <Portfolio />
        <Experience />
        <Contact />
      </main>
   
      <Footer />
    </div>
  );
}

export default App;
