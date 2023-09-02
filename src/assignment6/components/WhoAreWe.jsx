import React from 'react'
import shoe1 from '../../assets/ass6/shoe1.jpeg'
import shoe2 from '../../assets/ass6/shoe2.jpeg'
import shoe3 from '../../assets/ass6/shoe3.jpeg'
import shoe4 from '../../assets/ass6/shoe4.jpeg'
import arrow from '../../assets/ass6/arrow1.svg'


const shoeDataList = [
    {
        image: shoe1,
        name: 'Cactus',
        size: 'SS/20',
        ori: '$300 DOL',
        dis: '$180 DOL'
    },
    {
        image: shoe2,
        name: 'Durban',
        size: 'SS/20',
        ori: '$240 DOL',
        dis: '$144 DOL'
    },
    {
        image: shoe3,
        name: 'The Eye',
        size: 'SS/20',
        ori: '$240 DOL',
        dis: '$144 DOL'
    },
    {
        image: shoe4,
        name: 'Carnera',
        size: 'SS/20',
        ori: '$300 DOL',
        dis: '$180 DOL'
    },
]

const ShoeCard = ({ image, name, size, ori, dis }) => {
    return (
        <div className='border-[2px] border-[#000000] min-w-[24vw] bg-cream2 pb-6'>
            <div className='flex flex-col items-center'>
                <img src={image} alt="shoe image" className='h-full w-[14rem] obj' />
                <div className='mt-[-20px] flex flex-col items-center'>
                    <span>{size}</span>
                    <h3 className='font-qb1 text-5xl font-bold uppercase tracking-tight'>{name}</h3>
                    <span className='text-md line-through'>{ori}</span>
                    <span className='text-xl'>{dis}</span>
                </div>
            </div>
        </div>
    )
}

const ShoesContainer = () => {
    return (
        <div className='pt-64 w-screen overflow-scroll scrollHidder'>
            <div className='flex pl-48 mr-20 w-full items-center gap-12'>
                {
                    shoeDataList.map((item, index) => (
                        <ShoeCard key={index} {...item} />
                    ))
                }
            </div>
        </div>
    )
}

const WhoAreWe = () => {
    return (
        <div className='mb-32'>
            <div className='max-w-[60%] absolute right-28 text-[2.5rem]  font-fav font-[400] leading-[3rem]'>
                <div className='flex items-center justify-between'>
                    <div className='text-[20px] underline'>Who are We</div>
                    <div>An independent <span className='underline'>brand</span> of</div>
                </div>
                <div>
                    urban trekking shoes and accessories
                </div>
                <div>
                    that comes from the convergence of
                </div>
                <div>
                    arts and personalities
                </div>
            </div>
            <ShoesContainer />
            <div className='flex items-center justify-end gap-4 mt-8 w-[80%] mx-auto'>
                <span className='font-tt text-lg'>SHOP ALL</span>
                <div className='w-[3.5rem] h-[3.5rem] border-[2px] flex justify-center items-center border-[#000000] rounded-full'>
                    <img src={arrow} alt="right arrow" className='w-[2.25rem]' />
                </div>
            </div>

        </div>
    )
}

export default WhoAreWe