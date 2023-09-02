import React from 'react'
import hero1 from '../../assets/ass6/hero1.jpeg'
import hero2 from '../../assets/ass6/hero2.jpeg'
import arrow from '../../assets/ass6/arrow1.svg'

const Hero = () => {
    return (
        <section >
            <div className='w-[80%] mx-auto mb-12'>
                <div className='full flex flex-col items-end mt-9 text-right text-[10rem] uppercase leading-[8rem] font-cyberthrone'>
                    <div>SPRING</div>
                    <div className='flex items-center'>
                        <div>SUMMER</div>
                        <div className='flex flex-col text-[3rem] font-tt leading-10'>
                            <div>COLL.</div>
                            <div>20</div>
                        </div>
                    </div>
                </div>
                <div className='flex items-center justify-end mt-12 gap-12'>
                    <div className='w-[400px] h-[500px] bg-green-300 border-[2px] border-[#000000]'>
                        <img src={hero1} alt="hero 1" className='h-full w-full object-fill'/>
                    </div>
                    <div className='w-[400px] h-[500px] bg-green-300 border-[2px] border-[#000000]'>
                        <img src={hero2} alt="hero 2" className='h-full w-full object-fill' />
                    </div>
                </div>
                <div className='flex items-center justify-end gap-4 mt-8'>
                    <span className='font-tt text-lg'>EXPLORE</span>
                    <div className='w-[3.5rem] h-[3.5rem] border-[2px] flex justify-center items-center border-[#000000] rounded-full'>
                        <img src = {arrow} alt = "right arrow" className='w-[2.25rem]'/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero