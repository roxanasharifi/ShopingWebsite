import React, { Component } from 'react';
import './App.css';
import ProductList from './ProductList';
class CartProduct extends Component {
    DeleteFromCart(productindex) {
        var json = JSON.parse(localStorage.cart);
        for (let i=0; i < json.length; i++){
            if (json[i].index == productindex){
                json.splice(i,1);
            }
        }
        console.log(json);
        localStorage.cart= JSON.stringify(json);
        window.location.reload();
    }
    render() {
        const index = this.props.index;
        const ProductName = this.props.ProductName;
        const ProductDescription =  this.props.ProductDescription ;
        const ImageSrc = ProductList[index].ProductImage;
        const ProductPrice =this.props.ProductPrice;
        const ProductInformation ={index,ProductName,ProductDescription,ImageSrc};
        return (
            <div className="CartProduct">
                <img src={ImageSrc} className="Cartimg" alt="pName" /><b> {ProductName}</b> ({ProductDescription}) - -  ${ProductPrice}  - - <button className="DelBtn" onClick={(e) => this.DeleteFromCart(ProductInformation.index)}>Delete</button>
            </div>
        );
    }
}
export default CartProduct;