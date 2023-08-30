import React from 'react'

const dataList = [
    {
        date: '12/02',
        content: 'Small Business Retail Pop Up Weekend!'
    },
    {
        date: '02/07',
        content: 'New Balance x Paperboy Paris by Greenhouse @ Canal Street Market'
    },
    {
        date: '12/11',
        content: 'Hack City 12/11'
    }
]

const LineMaker = () => {
    return (
        <div className='w-full flex gap-2'>
            {
                new Array(50).fill(0).map((_, index) => (
                    <div key={index} className='w-3 h-[0.8px] bg-gray-600 text-6xl font-light leading-none'></div>
                ))
            }
        </div>
    )
}

const Market2 = () => {
    return (
        <div className='mt-32 w-[90%] mx-auto relative'>
            <div className='flex items-center justify-around'>
                <span className='text-6xl fill-none stroke-white stroke-[1px]'>餐饮</span>
                <span className='text-6xl text-center'>Market <br /> Events</span>
                <span className='text-6xl fill-none stroke-white stroke-[1px]'>餐饮</span>
            </div>
            <div className='overflow-x-hidden mt-12'>
                <div>
                    <LineMaker />
                    <div className='h-3'></div>
                    <LineMaker />
                </div>

                <div className='flex items-center justify-between py-14 px-8'>
                    {
                        dataList.map(({ date, content }, index) => (
                            <div key={index} className='flex flex-col items-center'>
                                <span className='text-xs'>{date}</span>
                                <p className='text-md flex-wrap text-center max-w-[300px] mt-4'>{content}</p>
                            </div>
                        ))
                    }
                </div>

                <div className='mt-4'>
                    <LineMaker />
                    <div className='flex items-center justify-center border-[1px] border-black w-[160px] absolute bottom-[-14px] z-[8] bg-white left-1/2 -translate-x-1/2 cursor-pointer'><span className='p-4'>see all</span></div>
                    <div className='h-3'></div>
                    <LineMaker />
                </div>
            </div>

        </div>
    )
}

export default Market2