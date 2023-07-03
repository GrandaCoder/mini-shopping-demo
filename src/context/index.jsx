import { createContext, useState } from "react";
import PropTypes from "prop-types";

export const ShoppingContext = createContext()

export const ShoppingProvider = ({ children }) => {
    const [contador, setContador] = useState(0)
    return (
        <ShoppingContext.Provider value={{ contador, setContador }}>
            {children}
        </ShoppingContext.Provider>
    )
}

ShoppingProvider.propTypes = { children: PropTypes.node.isRequired };