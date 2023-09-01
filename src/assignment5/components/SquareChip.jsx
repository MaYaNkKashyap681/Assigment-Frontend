import React from 'react'

const SquareChip = ({ text, width, tSize }) => {
    return (
        <div className=' items-center justify-center  border-[2px] px-1 py-[0.4rem] inline-block border-[#000000] bg-white'
            style={{
                maxWidth: width + "px"
            }}><span className='uppercase font-qb2 flex justify-center items-center' style={{
                fontSize: tSize + "rem"
            }}>{text}</span></div>
    )
}

export default SquareChip