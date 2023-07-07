import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";

export const ShoppingContext = createContext()

export const ShoppingProvider = ({ children }) => {
    //shopping cart: inrement quantity
    const [contador, setContador] = useState(0)

    //product detail: change visible
    const [isProductOpen, setIsProductOpen] = useState(false)

    const closeProductDetail = () => {
        setIsProductOpen(false)
    }
    const changeVisibleProductDetail = () => {
        setIsProductOpen(!isProductOpen)
    }


    //product to show
    const [productoToShow, setProductoToShow] = useState({})

    //almacenamos los productos. 
    const [cartProducts, setCartProducts] = useState([])

    // useEffect(() => {
    //     console.log("se han actualizado los productos: ", cartProducts)
    // }, [cartProducts])
    
    //checkout side menu
    const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(true)
    const openCheckoutSideMenu = () => {
        setIsCheckoutSideMenuOpen(true)
    }
    const closeCheckoutSideMenu = () => {
        setIsCheckoutSideMenuOpen(false)
    }




    return (
        <ShoppingContext.Provider value={
            {
                contador,
                setContador,
                changeVisibleProductDetail,
                isProductOpen,
                productoToShow,
                setProductoToShow,
                setIsProductOpen,
                cartProducts,
                setCartProducts,
                openCheckoutSideMenu,
                closeCheckoutSideMenu,
                isCheckoutSideMenuOpen,
                closeProductDetail
            }}>
            {children}
        </ShoppingContext.Provider>
    )
}

ShoppingProvider.propTypes = { children: PropTypes.node.isRequired };