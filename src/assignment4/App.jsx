import React from 'react'
import LogoSvg from './LogoSvg'
import HeroText from './components/HeroText'
import HeroImage from './components/HeroImage'
import Market from './components/Market'
import Market2 from './components/Market2'
import Address from './components/Address'

const sideBarList = [
    {
        text: 'Food',
        text2: '餐饮',
        color: '#5ea3ec'
    },
    {
        text: 'Retail',
        text2: '購物',
        color: '#f64444'
    },
    {
        text: 'Community',
        text2: '文化',
        color: '#ffb400'
    }
]

const App = () => {
    return (
        <div className='h-screen w-screen flex'>
            <div className='z-[10] fixed top-12 left-14'>
                <LogoSvg />
            </div>

            <div className='w-[86%] pt-52'>
                <HeroText />
                <HeroImage />
                <Market />
                <Market2 />
                <Address />
            </div>
            <div className='w-[14%]  h-full grid grid-cols-3 grid-rows-1 fixed right-0'>
                {
                    sideBarList.map(({ text, text2, color }, index) => (
                        <div key={index} className='w-full h-full  relative' style={{
                            backgroundColor: color
                        }}>
                            <p className='mt-20 text-center text-xl'>{text2}</p>
                            <span className=' left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 font-OggRoman tracking-widest text-xl font-font5 rotate-90 absolute'>{text}</span></div>
                    ))
                }
            </div>
        </div>
    )
}

export default App