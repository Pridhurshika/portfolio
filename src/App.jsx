import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Skills from './components/Skills';
import Education from './components/Education';
import Research from './components/Research';
import Projects from './components/Projects';
import Activities from './components/Activities';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Fixed top navigation bar */}
      <Navbar />
      
      {/* Main content (padding top accounts for fixed navbar) */}
      <main className="flex-grow scroll-smooth">
        <Home />
        <Skills />
        <Education />
        <Research />
        <Projects />
        <Activities />
        <Contact />
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;

