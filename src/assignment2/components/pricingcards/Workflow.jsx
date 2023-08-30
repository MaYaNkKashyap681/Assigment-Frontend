import React from 'react'
import OffersList from '../Reusables/OfferingsList'
import NavButtons from '../Reusables/NavButtons'
const offerings = [
    "Unlimited Clients & Projects",
    "Proposals",
    "Contracts",
    "Invoicing & Payments",
    "Client CRM",
    "Project Management",
    "Task & Time Tracking",
    "iOS, Android, Chrome & Mac Apps"
]



const Workflow = () => {
    return (
        
        <div className='w-[50%] border-[1px] border-greyx p-8 bg-white'>
            <h3 className='text-xl font-medium font-custom1 text-gray-500'>Workflow</h3>
            <p className='text-greyx relative font-custom1 mt-2'><span className='text-xl absolute font-semibold'>$</span><span className='text-5xl ml-4 font-bold'>19</span><span className='text-xl'>/ month</span></p>
            <div className='h-[0.9px] bg-greenx mt-8'></div>
            <OffersList data = {offerings}/>
            <NavButtons style="mt-6 bg-greenx font-bold flex items-center justify-center py-5 w-full text-white rounded-md" text="START FREE"/>
        </div>
    )
}

export default Workflow