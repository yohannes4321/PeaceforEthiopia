import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Vision from './components/Vision';
import Impact from './components/Impact';
import Events from './components/Events';
import GalleryHighlights from './components/GalleryHighlights';
import Testimonials from './components/Testimonials';
import JoinMovement from './components/JoinMovement';
import Footer from './components/Footer';
import About from './pages/About';
import Work from './pages/Work';
import Gallery from './pages/Gallery';
import Documentary from './pages/Documentary';
import Partners from './pages/Partners';
import Contact from './pages/Contact';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'about':
        return <About />;
      case 'work':
        return <Work />;
      case 'gallery':
        return <Gallery />;
      case 'documentary':
        return <Documentary />;
      case 'partners':
        return <Partners />;
      case 'contact':
        return <Contact />;
      default:
        return (
          <>
            <Hero />
                <GalleryHighlights />
            <Vision />
            <Impact />
            <Events />
        
            <Testimonials />
            <JoinMovement />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main>
        {renderPage()}
      </main>
      <Footer setCurrentPage={setCurrentPage} />
    </div>
  );
}

export default App;