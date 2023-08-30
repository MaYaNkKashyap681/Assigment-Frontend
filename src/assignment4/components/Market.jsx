import React from 'react'
import img1 from '../../assets/ass4/img1.avif';
import img2 from '../../assets/ass4/img2.avif';
import img3 from '../../assets/ass4/img3.avif';


const marketList = [
    {
        image: img3,
        para: <p>Merging retail, food, art, and <br /> culture, Canal Street Market <br /> highlights top retail and design <br /> concepts, restaurants, and up-and-<br /> coming players in the downtown New <br /> York City community.</p>
    },
    {
        image: img2,
        para: <p>Retail Market Hours: <br />
            Fri– Sun: 11:00AM - 7:00PM</p>

    },
    {
        image: img1,
        para: <p>Food Hall Hours: <br />
            Mon – Sun: 11:00AM - 8:00PM</p>
    }
]
const Market = () => {
    return (
        <section className='mt-24 flex flex-col'>
            <div className='w-[90%] mx-auto'>
                <h2 className='text-[6rem] leading-[7rem]'>A New Kind <br /> of Market</h2>
                <div className='w-full grid grid-cols-3 grid-rows-1 mt-16 gap-x-16'>
                    {
                        marketList.map(({ image, para }, index) => (
                            <div key = {index} className=''>
                                <img src={image} />
                                <div className='text-sm leading-relaxed mt-6 font-font6 w-full tracking-wide "[word-spacing:20px]"'>
                                    {para}
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>


        </section>
    )
}

export default Market