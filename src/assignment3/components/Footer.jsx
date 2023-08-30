import React from 'react'

const Footer = () => {
    return (
        <footer className='py-4'>
            <div className='w-[94%] mx-auto flex items-center justify-between'>
                <div className='flex items-center gap-2'>
                    <div className='h-[1.5rem] w-[1.5rem] bg-black rounded-full'></div>
                    <p className='font-font3a text-[12px] font-[500]'>&#169;	Oli Harris 2023</p>
                </div>
                <div>
                    <ul className='flex gap-4 font-font3a text-[14px]'>
                        <li>Twitter</li>
                        <li>LinkedIn</li>
                        <li>Mail</li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer