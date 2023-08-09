import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";

export const ShoppingContext = createContext()

export const ShoppingProvider = ({ children }) => {

    const usuarios = localStorage.getItem("usuarios")
    if (!usuarios) {
        localStorage.setItem("usuarios", JSON.stringify([]))
    }
    // const persona = getCurrentUser()
    // console.log(persona)
    const [currentUser, setCurrentUser] = useState(null)

    // useEffect(() => {
    //     const personaActual = getCurrentUser()
    //     setCurrentUser(personaActual) 
    // },[])
  


    // para controlar queinformacion mostrar si el usuario esta online
    const [online, setOnline] = useState(false)
    
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

    //Shopping cart: order
    const [order, setOrder] = useState([])

    // useEffect(() => {
    //     console.log(order)
    // }, [order])

    //checkout side menu
    const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false)
    const openCheckoutSideMenu = () => {
        setIsCheckoutSideMenuOpen(true)
    }

    const closeCheckoutSideMenu = () => {
        setIsCheckoutSideMenuOpen(false)
    }

    //get products 
    const [products, setProducts] = useState(null)
    useEffect(() => {
        fetch('https://api.escuelajs.co/api/v1/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    const [filteredProducts, setFilteredProducts] = useState([])

    const filteredItemsByTitile = (items, title) => {
        return items?.filter(item => item.title.toLowerCase().includes(title.toLowerCase()))
    }

    //serch products by title
    const [searchByTitle, setSearchByTitle] = useState('')


    useEffect(() => {
        setFilteredProducts(filteredItemsByTitile(products, searchByTitle))
    }, [products, searchByTitle])

    //filtering by category
    const filterByCategory = (category,products) => {
        const filtrado = products?.filter(item => item.category.name === category)
        return filtrado
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
                closeProductDetail,
                order,
                setOrder,
                products,
                setProducts,
                searchByTitle,
                setSearchByTitle,
                filteredProducts,
                filterByCategory,
                online,
                setOnline,
                currentUser,
                setCurrentUser
            }}>
            {children}
        </ShoppingContext.Provider>
    )
}

ShoppingProvider.propTypes = { children: PropTypes.node.isRequired };