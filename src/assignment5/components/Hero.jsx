import React from 'react'
import hero1 from '../../assets/ass5/heroimag1.png'
import hero2 from '../../assets/ass5/heroimg2.png'
import SquareChip from './SquareChip'
import circle from '../../assets/ass5/circle5.svg'

const DivWithImage = ({ image, _style }) => {
    return (
        <div className={`${_style}`}>
            <img src={image} alt="hero image" className='h-full w-full object-fill' />
        </div>
    )
}

const InfoContainer = () => {
    return (
        <div className='absolute'>
            <SquareChip text={"Why Qrates"} width={120} tSize={0.9}/>
            <div>
                <h1 className='text-6xl mt-12 font-qb2'>Music in your <br />hands. <br />Without the <br />barriers.</h1>
            </div>
        </div>
    )
}

const Hero = () => {
    return (
        <>
            <div className='mt-32 relative w-[95%] mx-auto'>
                <InfoContainer />
                <DivWithImage image={hero1} _style={"border-[2px] border-[#000000] absolute right-32 h-[38rem] w-[30rem] rotate-[5deg] z-[5]"} />
                <DivWithImage image={hero2} _style={"border-[2px] border-[#000000] absolute left-20 top-[30rem] h-[42rem] w-[36rem] rotate-[-5deg] z-[3]"} />
                <div className='top-[48rem] right-56 absolute'>
                    <img src={circle} alt="circle player" />
                </div>
            </div>
            <div className='h-[2px] top-[84.6rem] w-full absolute left-0 right-0 bg-[#000000] z-[2]'></div>
        </>
    )
}

export default Hero