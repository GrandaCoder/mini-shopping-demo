import { createContext, useState } from "react";
import PropTypes from "prop-types";

export const ShoppingContext = createContext()

export const ShoppingProvider = ({ children }) => {
    //shopping cart: inrement quantity
    const [contador, setContador] = useState(0)

    //product detail: change visible
    const [isProductOpen, setIsProductOpen] = useState(false)

    //product to show
    const [productoToShow, setProductoToShow] = useState({})

    const changeVisibleProductDetail = () => {
        setIsProductOpen(!isProductOpen)
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
                setIsProductOpen
            }}>
            {children}
        </ShoppingContext.Provider>
    )
}

ShoppingProvider.propTypes = { children: PropTypes.node.isRequired };