import { XCircleIcon } from "@heroicons/react/24/solid"

import PropTypes from 'prop-types';

export const OrderCard = ({ title, price, image, handleDeleteProduct }) => {
    let renderIcon = handleDeleteProduct ? (<XCircleIcon className='w-6 h-6 cursor-pointer' onClick={() => handleDeleteProduct()} />) : (<></>)
    
    return (
        <div className="flex justify-between items-center mb-3 w-full border rounded-lg">
            <div className="flex items-center w-full">
                <figure className="w-20 h-20">
                    <img className='object-cover w-full h-full rounded-lg' src={image} alt="" />
                </figure>
                <p className="text-base font-light w-full p-4">
                    {title}
                </p>
            </div>
            <div className="flex items-center" >
                <p className="text-lg font-medium">{price}</p>
                {renderIcon}
            </div>
        </div>
    )
}

OrderCard.propTypes = {
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.array.isRequired,
    handleDeleteProduct: PropTypes.func
};
