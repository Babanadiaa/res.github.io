import React, { Component, useState } from 'react';
import Navbar from './UI/Navbar';
import MobileMenu from './UI/MobileMenu'
import LoadingScreenAnimation from './UI/LoadingScreenAnimation';
import Home from './sections/Home';
import AnimationWaves from './UI/AnimationWawes';
import About from './sections/about';

function App() {
  const [isLoading, setIsLoading] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  return (
    <>
      {/* {!isLoading && (<LoadingScreenAnimation onComplete={() => setIsLoading(true)} />)} */}
      <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <MobileMenu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <Home />
      <AnimationWaves />
      <About />
    </>
  )
}

export default App;