import React from 'react'

const Navbar = () => {
    return (
        <nav>
            <div className='flex justify-between w-[90%] mx-auto py-4'>
                <div></div>
                <div className='bg-cream2 rotate-[-10] px-1 flex items-center justify-center'>
                    <span className=' font-cyberthorne italic text-xs font-semibold  font-caveat '>NIK Mode</span>
                </div>
                <div>
                    <span className='font-tt uppercase text-xs'>Cart</span>
                </div>
            </div>
        </nav>
    )
}

export default Navbar