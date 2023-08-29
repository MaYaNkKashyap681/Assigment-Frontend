import {TiTick} from 'react-icons/ti'
const OffersList = ({data}) => {
    return (
        <ul className='mt-3 flex flex-col gap-2'>
            {
                data.map((item, index) => (
                    <li key = {index} className="text-sm font-semibold text-gray-600 flex items-center gap-1">
                        
                        <TiTick fill='lightgreen'/>{ item }
                    </li>
                ))
            }
        </ul>
    )
}

export default OffersList