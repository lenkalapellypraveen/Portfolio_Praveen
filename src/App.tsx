import React from 'react';
import { Header } from './components/Header';
import { About } from './components/About';
import { Profile } from './components/Profile';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { Education } from './components/Education';
import { Certifications } from './components/Certifications';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ThemeProvider } from './context/ThemeContext';
import './styles/App.css';

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <div className="app">
        <Header />
        <main>
          <Profile />
          <About/>
          <Skills />
          <Projects />
          <Experience />
          <Education />
          <Certifications />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default App;