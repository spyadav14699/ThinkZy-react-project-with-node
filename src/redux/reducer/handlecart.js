const handleCart = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            return [...state, action.payload];
        case 'REMOVE_FROM_CART':
            return state.filter(product => product.id !== action.payload);
        case 'DELETE_CART':
            return state.filter(product => product.id !== action.payload);
        default:    

            return state;
    }
}
export default handleCart;