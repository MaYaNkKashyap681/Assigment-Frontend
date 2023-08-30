import React from 'react'
import { img1, img2, img3, img4, img5, img6 } from '../../assets/ass3'

const imageDataList = [
    {
        image: img1,
        text: 'Image1'
    },
    {
        image: img2,
        text: 'Image2'
    }, {
        image: img3,
        text: 'Image3'
    }, {
        image: img4,
        text: 'Image4'
    }, {
        image: img5,
        text: 'Image5'
    }, {
        image: img6,
        text: 'Image6'
    },
]

const GridCard = ({ image, text }) => {
    return (
        <div className='group rounded-xl overflow-hidden relative cursor-pointer'>
            <spna className = "absolute top-6 left-6 z-[10] translate-x-[-1000px] translate-y-[-1000px] group-hover:translate-x-0  group-hover:translate-y-0 duration-400 ease-in transition-all font-font3b text-lg text-white font-bold ">{text}</spna>
            <div className='h-[4rem] w-[4rem] bg-white rounded-full absolute top-4 right-4 flex items-center justify-center font-font3b font-light scale-0 group-hover:scale-100 tarnsition-all duration-300 z-[10]'>Read</div>
            <img src={image} alt={`${text}`} className='h-full w-full object-cover transition duration-300 ease-in-out group-hover:blur-lg'/>
        </div>
    );
}


const GridComponent = () => {
    return (
        <div className='w-[94%] mx-auto grid grid-cols-2 gap-x-4 gap-y-8'>
            {
                imageDataList.map((data, index) => (
                    <GridCard key={index} {...data}/>
                ))
            }
        </div>
    )
}

export default GridComponent