const cart = [];


const handleCart = (state = cart, action) => {
    const product = action.product;
    switch (action.type) {
        case 'ADD_TO_CART':
            // if product already exist check
            const productExist = state.find(item => item.id === product.id);
            if (productExist) {
                // increse the quantity

                return state.map(item => {
                    if (item.id === product.id) {
                        item.quantity += 1;
                    }
                    return item;
                }
                );
            }
            else {
                const product = action.payload;
               return[
                ...state,
                {
                   ...product,
                     quantity: 1        
                }

               ]
            }
            break;
        case 'REMOVE_FROM_CART':
            return state.filter(item => item.id !== action.id);
            
            break;
        case 'ADD_QUANTITY':
            return state.map(item => {
                if (item.id === action.id) {
                    item.quantity += 1;
                }
                return item;
            }
            );
            

            default:
                break;

        }




