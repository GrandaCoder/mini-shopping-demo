/**
 * Calculates the total price of the given products of a new order
 *
 * @param {Array} products - An array of products.
 * @return {number} The total price of the products.
 */
export const calculateTotalPrice = (products) => {
    return products.reduce((total, product) => total + product.price, 0)
}

//get current user 
export const getCurrentUser = () => {
    return JSON.parse(localStorage.getItem("usuarios")).find(usuario => usuario.online === true)
}

export const getAllUsers = () => {
    return JSON.parse(localStorage.getItem("usuarios"))
}

export const authenticateUser = ({ email, password }) => {
    const users = getAllUsers()
    const user = users.find(usuario => usuario.email === email && usuario.password === password)
    return user
}

export const findUserByEmail = (user) => {
    return JSON.parse(localStorage.getItem("usuarios")).find(usuario => usuario.email === user.email)
}

export const setOnlineUser = (user, contexto) => {
    contexto.setOnline(true)
    user.online = true
    const usuarios = getAllUsers()
    usuarios.find(usuario => usuario.email === user.email).online = true
    localStorage.setItem("usuarios", JSON.stringify(usuarios))
}