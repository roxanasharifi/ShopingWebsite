import React, { Component } from 'react';

import '../CSS/App.css';
import Images from '../Images/ImageList';
class AdminProduct extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ProductInfo :props,
            Products : JSON.parse(localStorage.Product)
        };
    }

    render() {
        const Product = this.state.ProductInfo;
        const ImageSrc = Images[Product.ProductImage];
        return (
            <div className="AdminProduct">
                <img src={ImageSrc} className="Cartimg" alt="pName" />
                <b> {Product.ProductName}</b>
                ({Product.ProductDescription}) - -  ${Product.ProductPrice}  - -
            </div>
        );
    }
}
export default AdminProduct;