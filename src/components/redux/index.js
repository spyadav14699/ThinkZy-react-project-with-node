export const addTocart = (product) => {
    return {
        type: 'ADD_TO_CART',
        product
    }
    }
    export const removeFromCart = (id) => {
        return {
            type: 'REMOVE_FROM_CART',
            id
        }
    }
    export const addQuantity = (id) => {
        return {
            type: 'ADD_QUANTITY',
            id
        }
    }
    export const subtractQuantity = (id) => {
        return {
            type: 'SUBTRACT_QUANTITY',
            id
        }
    }
    export const clearCart = () => {
        return {
            type: 'CLEAR_CART'
        }
    }
    export const setCart = (cart) => {
        return {
            type: 'SET_CART',
            cart
        }
    }