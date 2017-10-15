let ProductId=0;
export let AddToProduct = (props) => {
    return {
        type: 'ADD_TO_PRODUCT',
        ProductId:ProductId++,
        ProductName: props.ProductName,
        ProductDescription:props.ProductDescription,
        ProductPrice:props.ProductPrice,
        ProductImage:props.ProductImage
    }
};
export let DeleteFromProduct = (props) => {
    return {
        type: 'DELETE_FROM_PRODUCT',
        ProductId : props
    };
};
export let AddToCart = (props) => {
    return {
        type: 'ADD_TO_CART',
        ProductId:props.ProductId,
        ProductName: props.ProductName,
        ProductDescription:props.ProductDescription,
        ProductPrice:props.ProductPrice,
        ProductImage:props.ProductImage
    }
};
export let DeleteFromCart = (ProductId) => {
    return {
        type: 'DELETE_FROM_CART',
        ProductId
    }
};
