import { NavLink } from 'react-router-dom'
import { useContext } from 'react';
import { ShoppingBagIcon } from '@heroicons/react/24/solid'

import { ShoppingContext } from '../../context';

const Navbar = () => {
    const contexto = useContext(ShoppingContext)
    const activeStyle = 'underline underline-offset-4';
    return (
        <nav className='flex justify-between top-0 items-center p-2 fixed z-10 w-full py-5 text-sm px-8 font-light bg-white'>
            <ul className='flex items-center gap-3'>
                <li className='font-semibold'>
                    <NavLink
                        to="/"
                    >
                        Shopi
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/order"
                        className={({ isActive }) => isActive ? activeStyle : undefined}
                    >
                        All
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/clothes"
                        className={({ isActive }) => isActive ? activeStyle : undefined}
                    >
                        Clothes
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/electronics"
                        className={({ isActive }) => isActive ? activeStyle : undefined}
                    >
                        Electronics
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/furnitures"
                        className={({ isActive }) => isActive ? activeStyle : undefined}
                    >
                        Furnitures
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/toys"
                        className={({ isActive }) => isActive ? activeStyle : undefined}
                    >
                        Toys
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/others"
                        className={({ isActive }) => isActive ? activeStyle : undefined}
                    >
                        Others
                    </NavLink>
                </li>
            </ul>
            {/* lado derecho */}
            <ul className='flex items-center gap-3'>
                <li className='text-black/50'>
                    juan@mail.com
                </li>
                <li>
                    <NavLink to="/orders"
                        className={({ isActive }) => isActive ? activeStyle : undefined}
                    >
                        My orders
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/account"
                        className={({ isActive }) => isActive ? activeStyle : undefined}
                    >
                        My Account
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/signin"
                        className={({ isActive }) => isActive ? activeStyle : undefined}
                    >
                        Sign in
                    </NavLink>
                </li>
                <li className='flex items-center gap-1'>
                    <ShoppingBagIcon className='w-6 h-6 text-green-500'/> {contexto.cartProducts.length}
                </li>
            </ul>
        </nav>
    )
}
export default Navbar