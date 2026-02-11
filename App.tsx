import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import RenovationServices from './components/RenovationServices';
import Stats from './components/Stats';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { LanguageProvider } from './contexts/LanguageContext';
import Mamacrowd from './components/Mamacrowd';

const App: React.FC = () => {
  return (
    <LanguageProvider>
      <div className="bg-slate-50 text-slate-800 font-sans antialiased">
        <Header />
        <main>
          <Hero />
          <Services />
          <RenovationServices />
          <Stats />
          <Projects />
          <Mamacrowd />
          <Contact />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
};

export default App;