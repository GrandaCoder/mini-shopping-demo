import PropTypes from 'prop-types';

export const OrdersCard = ({ totalPrice, totalProducts, date }) => {

    const fecha = new Date(date);
    const dia = fecha.getDate();
    const mes = fecha.getMonth() + 1;
    const anio = fecha.getFullYear();

    return (
        <div className="flex justify-between items-center mb-2 border rounded-lg  p-2 bg-gradient-to-tr from-blue-500 to-purple-500 cursor-pointer mt-2 ">
            <div className="flex flex-col text-white text-left w-full">
                <p className="text-base font-light flex justify-between ">
                    <span>Fecha</span>
                    <span>{dia}/{mes}/{anio}</span>
                </p>
                <p className="text-base font-light flex justify-between">
                    <span>Productos</span>
                    <span>{totalProducts}</span>
                </p>
                <p className="text-base font-light flex justify-between">
                    <span>Total</span>
                    <span>${totalPrice}</span>
                </p>
            </div>
        </div>
    )
}

OrdersCard.propTypes = {
    totalPrice: PropTypes.number.isRequired,
    totalProducts: PropTypes.number.isRequired,
    date: PropTypes.object.isRequired
};
