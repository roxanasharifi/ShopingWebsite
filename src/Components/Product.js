import React, { Component } from 'react';
import '../CSS/App.css';
import {Link} from 'react-router';
import Images from '../Images/ImageList';
class Product extends Component {
    AddToCart(obj) {
        if (!localStorage.cart) {
            localStorage.cart = JSON.stringify([]);
        }
            const data = JSON.parse(localStorage.cart);
            localStorage.setItem('TotalPrice',obj.TotalPrice);
            data.push(obj);
            localStorage.cart = JSON.stringify(data);
            console.log(JSON.parse(localStorage.cart));
    }
    render() {
        let TotalPrice=0;
        const index = this.props.index;
        const ProductName = this.props.ProductName;
        const ProductDescription =  this.props.ProductDescription ;
        const ImgSrc = Images[this.props.ProductImage];
        const ProductImage = this.props.ProductImage;
        const ProductPrice = this.props.ProductPrice;
        TotalPrice +=(this.props.ProductPrice);
        const ProductInformation ={index,ProductName,ProductDescription,ProductImage,ProductPrice,TotalPrice};
        return (
            <div className="Product">
                <img src={ImgSrc} className="img" alt="pName" />
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