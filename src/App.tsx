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

  return (
    <>
      <CircuitBackground />
      <Navbar/>
      <Hero/>
      <Problemsolution/>
      <Products/>
      <Whyus/>
      <Testimonials/>
      <Technology/>
      <OurStory/>
      <Footer/>
    </>
  )
}

export default App;
