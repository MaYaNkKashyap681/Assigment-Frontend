import React, { useState } from 'react'
import watch from '../../assets/ass5/watch.png'
import SquareChip from './SquareChip'
import guitar from '../../assets/ass5/guitar.avif'
import portrait from '../../assets/ass5/portrait.avif'
const storiesList = [
    {
        image: portrait,
        color: '#FFF804',
        text: `"The response was overwhelming. It made me wonder why I hadn't pressed any records on vinyl before now. It felt like something that people had been waiting for for a long time."`,
        author: 'SOL'
    },
    {
        image: guitar,
        color: '#FF4500',
        text: `“We hit our goal of 100 Records in the first 32 minutes. And I have to be honest, I didn't expect that. There's no world where I would have thought that we were about to sell north of 2800 copies.”`,
        author: 'Mason Lieberman (The Real Folk Blues, 2020)'
    }
]

const IndexSelector = ({ index, clickFunction }) => {

    const handleClick = (idx) => {
        clickFunction(idx);
    }

    return (
        <>
            <div className={`flex items-center justify-center rounded-full ${index === 0 ? 'bg-black ' : 'border-[2px] border-[#000000] '}  h-[2.52rem] w-[2.52rem] cursor-pointer`} onClick={() => handleClick(0)}><span className={`${index === 0 ? 'text-white' : 'text-[#000000]'}`}>1</span></div>
            <div className={`flex items-center justify-center rounded-full ${index === 1 ? 'bg-black text-white' : 'border-[2px] border-[#000000]'}  h-[2.52rem] w-[2.52rem] cursor-pointer`} onClick={() => handleClick(1)}><span className={`${index === 1 ? 'text-white' : 'text-[#000000]'}`}>2</span></div>
        </>
    )
}

const StoriesSection = () => {

    const [index, setIndex] = useState(0);
    const [data, setData] = useState(storiesList[0]);
    const changeData = (idx) => {
        setIndex(idx);
        setData(storiesList[idx])
    }

    return (
        <div className='relative'>
            <img src={watch} alt="watch image" className='w-[12rem] absolute right-20 top-[-10%] z-[4]' />
            <div className='absolute left-8 top-12 z-[4]'><SquareChip text={"ARTISTS ON QRATES"} width={200} tSize={0.9} /></div>
            <div className='absolute left-8 bottom-8 flex items-center gap-2 z-10'><IndexSelector index={index} clickFunction={changeData} /></div>
            <div className='min-h-screen w-full grid grid-rows-1 grid-cols-2 mt-20 border-t-[2px] border-b-[2px] border-[#000000] '>
                <div className='h-full w-full border-l-[1.6px] border-[#000000] relative flex flex-col items-center' style={{ backgroundColor: data.color }}>
                    <div className='absolute w-[90%] mx-auto bottom-[22rem] '>
                        <p className='font-p1 text-[1.8rem] font-light leading-8 word-spacer'>{data.text}</p>
                        <h4 className='text-left mt-6 font-qb2  text-2xl'><span className=' rotate-90'>-</span><span className='underline'>{data.author}</span></h4>
                    </div>
                </div>
                <div className='h-full w-full border-l-[1.6px] border-[#000000]'>
                    <img src={data.image} alt="stories image" className='h-full w-full object-fill' />
                </div>
            </div>
        </div>
    )
}

export default StoriesSection