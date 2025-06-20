import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero'
import Problemsolution from './components/Problemsolution';

function App() {
    const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    <Hero/>
    <Problemsolution/>
    </>
  )
}

export default App;
