import React from 'react'
import extra from '../../assets/ass6/extra1.svg'

const Extras = () => {
    return (
        <section>
            <div className='w-[80%] mx-auto my-20 flex items-center gap-32'>
                <div className='w-full flex items-center justify-end relative'>
                    <img src={extra} alt="extra image" className='w-[4rem]' />
                    <span className='font-caveat absolute text-2xl right-[-70px]'>William Gibson</span>
                </div>
                <div className='w-[90%] text-lg font-qb1 leading-snug'>
                    <p>Good things come to those who wait – Déplacé Maison is what has been missing in the modern fashion industry for years. Buy a shoe of high quality and design it finally happened.  </p>
                </div>

            </div>
        </section>
    )
}

export default Extras