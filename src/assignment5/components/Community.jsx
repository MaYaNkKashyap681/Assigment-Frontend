import React from 'react'
import SquareChip from './SquareChip'

const Community = () => {
    return (
        <div className='flex flex-col items-center py-12'>
            <SquareChip text={"Community"} width={120} tSize={0.9} />
            <h3 className='mt-8 text-4xl font-qb2'>Join a Growing Community</h3>
            <p className='mt-8 text-center w-[60%] font-qb1 text-xl leading-8'>We're build a home for the next generation vinyl lovers and cassette junkies.<br />Get in front of fans, connect with artists, labels and stores.</p>
            <span className='mt-8 flex items-center justify-center uppercase font-qb2 text-[#000000] bg-white text-[1rem] border-[2px] border-[#000000] rounded-3xl px-20 py-3'>Read Stories</span>

        </div>
    )
}

export default Community