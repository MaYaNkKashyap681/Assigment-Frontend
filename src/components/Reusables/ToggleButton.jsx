import React, {useState} from 'react'

const ToggleButton = () => {
    const [isMonthly, setIsMonthly] = useState(true)
  return (
    <div className='flex items-center gap-4'>
        <span className={`${isMonthly ? 'text-xl' : ''}`}>Montly</span>
        <div className='w-[60px] h-[30px] bg-greenx rounded-3xl p-1 relative flex items-center cursor-pointer transition-all duration-300 mx-2' onClick={() => setIsMonthly((prev) => !prev)}>
            <div className = {`w-[24px] h-[24px] rounded-full bg-white absolute ${isMonthly ? 'left-1' : 'right-1'}`}></div>
        </div>
        <span className={`${!isMonthly ? 'text-xl' : ''}`}>Yearly</span>
    </div>
  )
}

export default ToggleButton