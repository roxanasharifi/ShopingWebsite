export let ProductReducer = (state =[], action) => {
    switch (action.type) {
        case 'ADD_TO_PRODUCT':
            return [
                ...state,
                {
                    ProductId: action.ProductId,
                    ProductName:action.ProductName,
                    ProductDescription:action.ProductDescription,
                    ProductPrice: action.ProductPrice,
                    ProductImage:action.ProductImage
                }
            ];
        case 'DELETE_FROM_PRODUCT':
            return state.filter((Product) => Product.ProductId !== action.ProductId);
        default:
            return state;
    }
};

export let CartReducer = (state =[], action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            return [
                ...state,
                {
                    ProductId: action.ProductId,
                    ProductName:action.ProductName,
                    ProductDescription:action.ProductDescription,
                    ProductPrice: action.ProductPrice,
                    ProductImage:action.ProductImage
                }
            ];
        case 'DELETE_FROM_CART':
            return state.filter((ProductCart) => ProductCart.ProductId !== action.ProductId);
        default:
            return state;
    }
};



