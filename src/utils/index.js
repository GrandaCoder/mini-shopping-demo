/**
 * Calculates the total price of the given products of a new order
 *
 * @param {Array} products - An array of products.
 * @return {number} The total price of the products.
 */
export const calculateTotalPrice = (products) => {
    return products.reduce((total, product) => total + product.price, 0)
}