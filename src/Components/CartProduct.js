import React, { Component } from 'react';
import '../CSS/App.css';
import Images from '../Images/ImageList';
class CartProduct extends Component {
    constructor(props) {
        super(props);
        this.state = {
            index: props.index,
            ProductName : props.ProductName,
            ProductDescription : props.ProductDescription,
            ProductPrice :props.ProductPrice,
            productImage : props.ProductImage
        };
    }
    render() {
        const ImageSrc = Images[this.state.productImage];
        const ProductInformation =this.state;
        return (
            <div className="CartProduct">
                <img src={ImageSrc} className="Cartimg" alt="pName" /><b> {ProductInformation.ProductName}</b> ({ProductInformation.ProductDescription}) - -  ${ProductInformation.ProductPrice}
            </div>
        );
    }
}
export default CartProduct;