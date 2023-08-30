import React from 'react'
import OffersList from '../Reusables/OfferingsList'
import NavButtons from '../Reusables/NavButtons'
const offerings = [
    "Everything in Workflow, plus...",
    "White-labelled client experience",
    "Client forms and questionnaires",
    "Workflow automations",
    "Subcontracting (client-mode)",
    "Calendly integration",
    "Client portal",
    "Priority support"
]

const WorkflowPlus = () => {
    return (

        <div className='w-[50%] border-[1px] border-greyx p-8 bg-white  overflow-hidden'>
            <div className='relative'>
                <div className=' bg-greenx h-[2rem] min-w-[12rem] rotate-45 absolute right-[-80px] top-[6px] text-center flex justify-center items-center text-white font-bold font-custom1'><span>MOST POPULAR</span></div>
                <h3 className='text-xl font-medium font-custom1 text-gray-500'>Workflow Plus</h3>
                <p className='text-greyx relative font-custom1 mt-2'><span className='text-xl absolute font-semibold'>$</span><span className='text-5xl ml-4 font-bold'>29</span><span className='text-xl'>/ month</span></p>
            </div>
            <div className='h-[0.9px] bg-greenx mt-8'></div>
            <OffersList data = {offerings}/>
            <NavButtons style="mt-6 bg-greenx font-bold flex items-center justify-center py-5 w-full text-white rounded-md" text="START FREE"/>
        </div>

    )
}

export default WorkflowPlus