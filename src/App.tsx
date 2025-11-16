import { useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import OverviewSection from './components/OverviewSection';
import ServicesSection from './components/ServicesSection';
import PortfolioSection from './components/PortfolioSection';
import TestimonialsSection from './components/TestimonialsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Router>
      <div className="min-h-screen bg-background">
        <Navbar />
        <main>
          <HeroSection />
          <OverviewSection />
          <ServicesSection />
          <PortfolioSection />
          <TestimonialsSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
