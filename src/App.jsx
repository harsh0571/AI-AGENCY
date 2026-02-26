import React from 'react';
import Navbar from './sections/Navbar/Navbar';
import Hero from './sections/Hero/Hero';
import LeadMagnet from './sections/LeadMagnet/LeadMagnet';
import NicheStrip from './sections/NicheStrip/NicheStrip';
import CredStrip from './sections/CredStrip/CredStrip';
import FeaturedWork from './sections/FeaturedWork/FeaturedWork';
import PortfolioCTA from './sections/PortfolioCTA/PortfolioCTA';
import LeadCapture from './sections/LeadCapture/LeadCapture';
import Services from './sections/Services/Services';
import Process from './sections/Process/Process';
import Packages from './sections/Packages/Packages';
import Testimonials from './sections/Testimonials/Testimonials';
import Contact from './sections/Contact/Contact';
import Footer from './sections/Footer/Footer';
import StickyCTA from './sections/StickyCTA/StickyCTA';
import AdminToggle from './components/admin/AdminToggle';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <LeadMagnet />
      <NicheStrip />
      <CredStrip />
      <FeaturedWork />
      <PortfolioCTA />
      <LeadCapture />
      <Services />
      <Process />
      <Packages />
      <Testimonials />
      <Contact />
      <Footer />
      <StickyCTA />
      <AdminToggle />
    </div>
  );
}

export default App;
