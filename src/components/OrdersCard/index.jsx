import { XCircleIcon } from "@heroicons/react/24/solid"

import PropTypes from 'prop-types';

export const OrdersCard = ({ totalPrice, totalProducts}) => {

    return (
        <div className="flex justify-between items-center mb-3 w-full border border-black">
            <p>
                <span>01.02.2023</span>
                <span>{totalProducts} products</span>
                <span>${totalPrice}</span>
            </p>
        </div>
    )
}

OrdersCard.propTypes = {
    totalPrice: PropTypes.number.isRequired,
    totalProducts: PropTypes.number.isRequired
};
