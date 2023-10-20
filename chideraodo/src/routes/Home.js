import React from 'react';
import { Navbar, Footer } from '../components';
import { Achievements, Beliefs, Contact, Journey, Meet, Header } from '../container';
import '../App.css'

const Home = () => {
  return (
    <div className="Home">
      <Navbar />
      <Header />
      <Meet />
      <Journey />
      <Achievements />
      <Beliefs />
      <Contact />
      <Footer />
    </div>
  )
}

export default Home