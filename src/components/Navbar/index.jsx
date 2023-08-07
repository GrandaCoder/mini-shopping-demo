import { NavLink } from 'react-router-dom'
import { useContext, useState } from 'react';
import { ShoppingBagIcon, Bars3Icon } from '@heroicons/react/24/solid'
import { ShoppingContext } from '../../context';

import { exitCurrentUser, getCurrentUser } from '../../utils';
import { useMediaQuery } from 'react-responsive';

const Navbar = () => {
    // Estado para controlar la visibilidad del menú hamburguesa
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    // Función para alternar la visibilidad del menú hamburguesa
    const isTabletOrMobile = useMediaQuery({ maxWidth: 767 })
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };


    const contexto = useContext(ShoppingContext)
    const currentUser = getCurrentUser()

    const handleExitUser = () => {
        exitCurrentUser(contexto)
    }
    const activeStyle = 'underline underline-offset-4 ';

    return (
        <nav
            className='
            flex
            justify-between
            top-0
            items-center
            p-2
            fixed
            z-10
            w-full
            py-5
            text-sm
            px-8
            font-light
            bg-yellow-300
            max-md:flex-col
            max-md:items-start
            '>

            {/* menu Hamburguesa */}
            <button>
                <Bars3Icon className={`${isTabletOrMobile ? 'w-6 h-6' : 'hidden'}`} onClick={toggleMenu} />
            </button>
            {/* flex items-center gap-3 flex-row */}
            <ul className={`${isTabletOrMobile ? `${isMenuOpen ? 'flex' : 'hidden'} flex-col items-srat gap-3 w-full mb-10` : 'flex items-center gap-3 flex-row'}`}>
                <li className='font-semibold'>
                    <NavLink
                        to="/"
                    >
                        Shopi
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/"
                        className={({ isActive }) => isActive ? activeStyle : undefined}
                    >
                        All
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/home/Clothes"
                        className={({ isActive }) => isActive ? activeStyle : undefined}
                    >
                        Clothes
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/home/Electronics"
                        className={({ isActive }) => isActive ? activeStyle : undefined}
                    >
                        Electronics
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/home/Shoes"
                        className={({ isActive }) => isActive ? activeStyle : undefined}
                    >
                        Shoes
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/home/Others"
                        className={({ isActive }) => isActive ? activeStyle : undefined}
                    >
                        Others
                    </NavLink>
                </li>
            </ul>

            {/* lado derecho */}
            <ul className={`${isTabletOrMobile ? `${isMenuOpen ? 'flex' : 'hidden'} flex-col items-start gap-3 w-full ` : 'flex items-center gap-3 flex-row'}`}>
                {
                    contexto.online &&
                    <li className='text-black/50'>
                        {currentUser?.email}
                    </li>
                }
                {
                    contexto.online &&
                    <li>
                        <NavLink to="/orders"
                            className={({ isActive }) => isActive ? activeStyle : undefined}>
                            My orders
                        </NavLink>
                    </li>
                }
                {
                    contexto.online &&
                    <li>
                        <NavLink to="/account"
                            className={({ isActive }) => isActive ? activeStyle : undefined}>
                            My Account
                        </NavLink>
                    </li>
                }
                {
                    (contexto.online) ?
                        <li>
                            <NavLink to="/signin"
                                className={({ isActive }) => isActive ? activeStyle : undefined}
                                onClick={handleExitUser}
                            >
                                Sign Out
                            </NavLink>
                        </li> :
                        <li>
                            <NavLink to="/signin"
                                className={({ isActive }) => isActive ? activeStyle : undefined}
                            >
                                Sign in
                            </NavLink>
                        </li>

                }

                <li className='flex items-center gap-1'>
                    <ShoppingBagIcon className='w-6 h-6 text-black cursor-pointer' onClick={() => contexto.openCheckoutSideMenu()} /> {contexto.cartProducts.length}
                </li>
            </ul>
        </nav>
    )
}

export default Navbar