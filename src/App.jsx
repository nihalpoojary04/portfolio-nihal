import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';

import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <Hero />
        <Skills />
        <Projects />
      </main>
      <Footer />
    </div>
  );
}

export default App;
