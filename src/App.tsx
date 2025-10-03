import { useState, useRef } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import LayeredBackground from './components/LayeredBackground';
import Modal from './components/Modal';
import ContactForm from './components/ContactForm';
import FloatingWidget from './components/FloatingWidget';
import MainSections from './components/MainSections';
import Blog from './components/Blog';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AboutUs from './components/AboutUs';
import Services from './components/Services';

type ActiveSection = 'main' | 'about' | 'services';

function App() {
    const [count, setCount] = useState(0)
    const ourStoryRef = useRef<HTMLDivElement | null>(null);
    const testimonialsRef = useRef<HTMLElement | null>(null);
    const productsRef = useRef<HTMLDivElement | null>(null);
    const footerRef = useRef<HTMLDivElement | null>(null);
    const [showModal, setShowModal] = useState(false);
    const [activeSection, setActiveSection] = useState<ActiveSection>('main');

    const handleSectionChange = (section: ActiveSection) => {
        setActiveSection(section);
    };

  return (
    <>
      <LayeredBackground activeSection={activeSection} />
      <Navbar 
        ourStoryRef={ourStoryRef}
        testimonialsRef={testimonialsRef}
        productsRef={productsRef}
        footerRef={footerRef}
        onSectionChange={handleSectionChange}
      />
      {activeSection === 'main' && <MainSections />}
      {activeSection === 'about' && <AboutUs />}
      {activeSection === 'services' && <Services />}
      <Footer onContactClick={() => setShowModal(true)} />      
      {/*<Blog />*/}
      <FloatingWidget />
      <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
        <ContactForm />
      </Modal>
    </>
  )
}

export default App;
