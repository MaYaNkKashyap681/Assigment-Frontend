import React from 'react'
import vinyl from '../../assets/ass5/vinyl1.png'
import crowdFunding from '../../assets/ass5/crowdfunding.png'
import buysell from '../../assets/ass5/buysell.png'
import SquareChip from './SquareChip'


const cardDataList = [

    {
        chipTitle: 'NO RISK, NO WASTE',
        title: 'Crowdfunding',
        image: crowdFunding,
        para: 'Rally your fans and gather pledges. Press the exact number of records you need, without having to pay anything upfront.',
        bg: '#FFF804',
        w: 200
    },
    {
        chipTitle: 'GET INTO IT',
        title: 'Press & Sell',
        image: buysell,
        para: `Put your music on physical, sooner. Take pre-orders from fans and we'll take care of the rest.`,
        bg: '#81836C',
        w: 120
    },

]

const LearMoreButton = () => {
    return (
        <div className='flex items-center justify-center uppercase font-qb1 text-white bg-[#000000] text-[0.8rem] rounded-3xl px-8 py-3 mt-8'>
            <span>Learn More</span>
        </div>
    )
}

const StartProject = () => {
    return (
        <div className='bg-black py-16 text-white flex items-center justify-around'>
            <p className='text-white text-lg w-[70%]'>Just after straight up vinyl pressing or cassette duplication? We do that too. Tell us where and we'll ship in bulk to wherever you need.</p>
            <span className='underline'>START A PRESS ONLY PROJECT</span>
        </div>
    )
}

const DataCard = ({ chipTitle, title, image, para, bg, w }) => {
    return (
        <div className='h-full w-full border-l-[1.6px] border-[#000000] flex flex-col items-center justify-between pt-20 pb-10' style={{
            backgroundColor: bg
        }}>
            <SquareChip text={chipTitle} width={w} tSize={0.7} />
            <span className='font-qb2 text-4xl mt-3'>{title}</span>
            <p className='text-center max-w-[70%] font-qb2 text-md mt-3'>{para}</p>
            <img src={image} alt="product image" className='w-[300px]' />
            <LearMoreButton />
        </div>
    )
}

const ProjectType = () => {
    return (
        <div className=''>
            <div className='pt-20'>
                <h1 className='text-center font-qb2 text-[2.5rem]'>Choose from two formats and three project types.</h1>
                <div className='min-h-screen w-full grid grid-rows-1 grid-cols-2 mt-20 border-t-[2px] border-b-[2px] border-[#000000] '>
                    {
                        cardDataList.map((card, index) => (
                            <DataCard key={index} {...card} />
                        ))
                    }
                </div>
            </div>
            <StartProject />

        </div>
    )
}

export default ProjectType