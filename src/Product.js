import React, { Component } from 'react';
import './App.css';
import {Link} from 'react-router';

class Product extends Component {
    AddToCart(obj) {
        if (!localStorage.cart) {
            localStorage.cart = JSON.stringify([]);
        }
            const data = JSON.parse(localStorage.cart);
            data.push(obj);
            localStorage.cart = JSON.stringify(data);
            console.log(JSON.parse(localStorage.cart));
    }
    render() {

        const index = this.props.id;
        const ProductName = this.props.ProductName;
        const ProductDescription =  this.props.ProductDescription ;
        const ImageSrc = this.props.ProductImage;
        const ProductPrice = this.props.ProductPrice;
        const ProductInformation ={index,ProductName,ProductDescription,ImageSrc,ProductPrice};
        return (
            <div className="Product">
                <img src={ImageSrc} className="img" alt="pName" />
                <div>
                    <Link to={`/AboutProduct/${index}`}> <h3>{ProductName}</h3> </Link>
                    <p>{ProductDescription}</p>
                </div>
                <div>
                    <button onClick={(e) => this.AddToCart(ProductInformation)}>add</button>
                </div>
            </div>
        );
    }
}
export default Product;