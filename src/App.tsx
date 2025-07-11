import { useState, useRef } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import CircuitBackground from './components/CircuitBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero'
import Problemsolution from './components/Problemsolution';
import Products from './components/Products';
import Whyus from './components/Whyus';
import Testimonials from './components/Testimonials';
import Technology from './components/Technology';
import Footer from './components/Footer';
import OurStory from './components/OurStory';
import Modal from './components/Modal';
import ContactForm from './components/ContactForm';
//import Muthurglot from './components/Muthurglot';
import Whatwedo from './components/Whatwedo';
import CallToAction from './components/CallToAction';

function App() {
    const [count, setCount] = useState(0)
    const ourStoryRef = useRef<HTMLDivElement | null>(null);
    const testimonialsRef = useRef<HTMLElement | null>(null);
    const productsRef = useRef<HTMLDivElement | null>(null);
    const footerRef = useRef<HTMLDivElement | null>(null);
    const [showModal, setShowModal] = useState(false);

  return (
    <>
      <CircuitBackground />
      <Navbar 
        ourStoryRef={ourStoryRef}
        testimonialsRef={testimonialsRef}
        productsRef={productsRef}
        footerRef={footerRef}
        onOpenContact={() => setShowModal(true)} 
      />
      <main className="main-content">
        <Hero productsRef={productsRef} ourStoryRef={ourStoryRef}/>
        <Problemsolution/>
        <Whatwedo/>
        <Technology/>
        <Products ref={productsRef}/>
        <Whyus footerRef={footerRef}/>
        <Testimonials ref={testimonialsRef}/>
        <CallToAction/>
        <OurStory ref={ourStoryRef}/>
      </main>
      <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
        <ContactForm />
      </Modal>
      <Footer ref={footerRef} onContactClick={() => setShowModal(true)}/>
      {/* <Muthurglot/> */}
    </>
  )
}

export default App;
