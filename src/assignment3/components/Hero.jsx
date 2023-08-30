import React from 'react'

const chips = 'bg-[#e8e5e480] rounded-2xl px-[8px] py-[6px] '

const Tabs = () => {
    return (
        <div className='flex items-center mt-8 gap-2 text-xs font-font3b'>

            <span>Expertise</span>
            <span className={`${chips}`}>Branding</span>
            <span className={`${chips}`}>Product</span>
            <span className={`${chips}`}>Design Systems</span>


        </div>
    )
}

const Hero = () => {
    return (
        <section className='py-[9rem]'>
            <div className='w-full flex flex-col items-center'>
                <h2 className='text-center font-font3a text-[3.75rem] font-[500] leading-[4.5rem]'>A brand and product <br />designer working with <br />clients globally</h2>
                <Tabs />

            </div>
        </section>
    )
}

export default Hero