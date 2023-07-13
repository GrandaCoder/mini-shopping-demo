import { useContext } from 'react'
import { Link } from 'react-router-dom'

import { XCircleIcon } from '@heroicons/react/24/solid'
import { ShoppingContext } from '../../context'
import { OrderCard } from '../OrderCard'
import { calculateTotalPrice } from '../../utils'

function CheckoutSideMenu() {
    const contexto = useContext(ShoppingContext)

    const handleDeleteProduct = (id) => {
        const cartProducts = contexto.cartProducts.filter(producto => producto.id !== id)
        contexto.setCartProducts(cartProducts)
        console.log(contexto.cartProducts)
    }

    const handleCheckout = () => {
        const orderToAdd = {
            date: new Date(),
            products: contexto.cartProducts,
            totalProducts: contexto.cartProducts.length,
            totalPrice: calculateTotalPrice(contexto.cartProducts)
        }
        contexto.setOrder([...contexto.order, orderToAdd])
        contexto.setCartProducts([])
    }

    return (
        <aside
            className={`${contexto.isCheckoutSideMenuOpen ? 'flex' : 'hidden'} top-20 
            flex-col fixed right-0 bg-white border border-black rounded-lg w-[360px] h-[calc(100vh-80px)]`}>
            <div className="flex justify-between items-center p-6">
                <h1>My order</h1>
                <XCircleIcon onClick={contexto.closeCheckoutSideMenu}
                    className='w-6 h-6 text-red-500 cursor-pointer' />
            </div>
            <div className="p-6 overflow-y-scroll flex-1">
                {
                    contexto.cartProducts.map(producto => (
                        <OrderCard
                            key={producto.id}
                            title={producto.title}
                            image={producto.images}
                            price={producto.price}
                            handleDeleteProduct={() => handleDeleteProduct(producto.id)}
                        />
                    ))
                }
            </div>
            <div className='px-6'>
                <p className='flex justify-between items-center'>
                    <span className='font-medium'>Total:</span>
                    <span className='text-xl'>${calculateTotalPrice(contexto.cartProducts)}</span>
                </p>
            </div>
            <Link to='/orders/last' className='p-6'>
                <button onClick={handleCheckout} className='bg-blue-500 text-white p-2 rounded-lg w-full'>Checkout</button>
            </Link>
        </aside>
    )
}

export default CheckoutSideMenu