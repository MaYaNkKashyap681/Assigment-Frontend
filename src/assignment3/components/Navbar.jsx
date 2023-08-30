import React from 'react'

const links = [
    'Home',
    'Profile',
    'Contact'
]

const Navbar = () => {
    return (
        <nav className='py-6'>
            <div className='w-full flex justify-center'>
                <ul className='flex items-center gap-2 bg-[#e8e5e480] px-1 py-[4px] rounded-[60px]'>
                    {
                        links.map((link, index) => (
                            <li className={`font-font3b flex items-center justify-center p-2 text-[12px] w-[80px] ${index === 0 ? 'bg-white rounded-[80px] ' : ''}`}>{link}</li>
                        ))
                    }
                </ul>
            </div>
        </nav>
    )
}

export default Navbar