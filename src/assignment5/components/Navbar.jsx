import React from 'react'
import logo from '../../assets/ass5/logo.svg'

const Navbar = () => {
    const links = [
        "Discover",
        "Search",
        "Why Qrates",
        "Cart"
    ]

    return (
        <nav>
            <div className='flex items-center justify-between w-[95%] mx-auto py-3'>
                <div className='flex items-center'>
                    <div><img src={logo} alt="logo" className='w-[2rem]' /></div>
                    <div className='ml-64'>
                        <ul className='flex items-center justify-start gap-8'>
                            {
                                links.map((link, index) => (
                                    <li key={index} className='font-qb2 uppercase text-[0.8rem] '>{link}</li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
                <div className='flex items-center justify-end gap-3'>
                    <span className='text-[0.8rem] font-qb1 uppercase '>Log In</span>
                    <span className='flex items-center justify-center uppercase font-qb1 text-white bg-[#000000] text-[0.8rem] rounded-3xl px-8 py-3'>Make a Record</span>
                </div>
            </div>
        </nav>
    )
}

export default Navbar