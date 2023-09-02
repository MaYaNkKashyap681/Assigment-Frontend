import React from 'react'

const InfiniteMover = () => {
    return (
        <section className='absolute'>
            <div className='w-full  bg-cream3 py-2 mb-8 h-[4rem] border-t-[2px] border-b-[2px] border-[#000000] overflow-hidden flex items-center infiniteScrollText'>
                {
                    new Array(18).fill(0).map((_, index) => (
                        <span className='uppercase text-3xl whitespace-nowrap font-cyberthrone flex items-center w-[26vw]'> <span>{index % 2 === 0 ? 'DeplaceShop' : 'Do Not Scroll'}</span>&nbsp;</span>
                    ))
                }
            </div>
        </section>
    )
}

export default InfiniteMover