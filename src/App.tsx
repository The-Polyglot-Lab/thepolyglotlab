import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero'
import Problemsolution from './components/Problemsolution';
import Products from './components/Products';
import Whyus from './components/Whyus';
import Testimonials from './components/Testimonials';
import Technology from './components/Technology';

function App() {
    const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    <Hero/>
    <Problemsolution/>
    <Products/>
    <Whyus/>
    <Testimonials/>
    <Technology/>
    </>
  )
}

export default App;
