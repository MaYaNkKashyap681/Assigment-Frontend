import React from 'react'
import Navbar from './components/Navbar'
import logo from '../assets/ass6/logo.svg'
import Hero from './components/Hero'
import InfiniteMover from './components/InfiniteMover'
import WhoAreWe from './components/WhoAreWe'
import Extras from './components/Extras'

const App = () => {
  return (
    <div className='bg-cream1 min-w-screen min-h-screen '>
      <div className='fixed top-8 left-4'>
        <img src={logo} alt="logo image" className='w-[3rem]' />
      </div>
      <Navbar />
      <Hero />
      <InfiniteMover />
      <div className='pt-32'></div>
      <WhoAreWe />
      <Extras />
    </div>
  )
}

export default App