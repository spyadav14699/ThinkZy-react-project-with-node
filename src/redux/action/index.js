export const addToCart = (product) => {
    return {
        type: 'ADD_TO_CART',
        payload: product
    }
}
export const deleteCart = (product) => {
    return {
        type: 'DELETE_CART',
        payload: product
    }
}