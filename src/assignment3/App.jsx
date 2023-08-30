import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import GridComponent from './components/GridComponent'
import EndSection from './components/EndSection'
import Footer from './components/Footer'

const App = () => {
  return (
    <>
      <Navbar />
      <Hero/>
      <GridComponent/>
      <EndSection/>
      <Footer/>
    </>
  )
}

export default App