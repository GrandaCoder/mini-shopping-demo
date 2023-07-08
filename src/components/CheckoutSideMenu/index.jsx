import { useContext } from 'react'
import { XCircleIcon } from '@heroicons/react/24/solid'
import { ShoppingContext } from '../../context'
import { OrderCard } from '../OrderCard'

function CheckoutSideMenu() {
    const contexto = useContext(ShoppingContext)
    return (
        <aside                                                               // agregaer el top-20                   
            className={`${contexto.isCheckoutSideMenuOpen ? 'flex' : 'hidden'} top-20 
            flex-col fixed right-0 bg-white border border-black rounded-lg w-[360px] h-[calc(100vh-80px)]`}>
            <div className="flex justify-between items-center p-6">
                <h1>My order</h1>
                <XCircleIcon onClick={contexto.closeCheckoutSideMenu}
                    className='w-6 h-6 text-red-500 cursor-pointer' />
            </div>
            <div className="p-6">
                {
                    contexto.cartProducts.map(producto => (
                        <OrderCard
                            key={producto.id}
                            title={producto.title}
                            image={producto.images}
                            price={producto.price}
                        />
                    ))
                }
            </div>
        </aside>
    )
}

export default CheckoutSideMenu