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

function App() {
    const [count, setCount] = useState(0)
    const ourStoryRef = useRef<HTMLDivElement | null>(null);
    const testimonialsRef = useRef<HTMLElement | null>(null);
    const productsRef = useRef<HTMLDivElement | null>(null);
    const footerRef = useRef<HTMLDivElement | null>(null);

  return (
    <>
      <CircuitBackground />
      <Navbar 
        ourStoryRef={ourStoryRef}
        testimonialsRef={testimonialsRef}
        productsRef={productsRef}
        footerRef={footerRef}
      />
      <Hero productsRef={productsRef} ourStoryRef={ourStoryRef}/>
      <Problemsolution/>
      <Products ref={productsRef}/>
      <Whyus footerRef={footerRef}/>
      <Testimonials ref={testimonialsRef}/>
      <Technology/>
      <OurStory ref={ourStoryRef}/>
      <Footer ref={footerRef}/>
    </>
  )
}

export default App;
