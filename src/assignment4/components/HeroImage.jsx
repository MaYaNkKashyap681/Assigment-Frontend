import React from 'react'
import hero from '../../assets/ass4/hero.avif'

const HeroImage = () => {
  return (
    <div className='mt-24 h-screen w-full'>
        <img src = {hero} alt = "hero image" className='h-full w-full object-cover'/>
    </div>
  )
}

export default HeroImage