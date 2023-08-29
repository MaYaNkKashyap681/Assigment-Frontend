import React from 'react'
import Workflow from './pricingcards/Workflow'
import WorkflowPlus from './pricingcards/WorkflowPlus'
import ToggleButton from './Reusables/ToggleButton'

const PricingHeading = () => {
    return (
        <>
            <h2 className='font-custom2 text-4xl font-semilight text-gray-700'>Plans & Pricing</h2>
        </>
    )
}


const PricingCards = () => {
    return (
        <div className='w-full'>
            <div className='py-16 w-[70%] mx-auto  '>
                <div className='flex justify-between items-center'>
                    <PricingHeading />
                    <ToggleButton />
                </div>
                <div className='flex items-start justify-center gap-[2rem] mt-[3rem]'>
                    <Workflow />
                    <WorkflowPlus />
                </div>
            </div>
        </div>
    )
}

export default PricingCards