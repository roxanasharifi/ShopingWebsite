import React, { Component } from 'react';
import './App.css';
import ProductList from './ProductList';
class CartProduct extends Component {
    constructor(props) {
        super(props);
        this.state = {
            index: props.index,
            ProductName : props.ProductName,
            ProductDescription : props.ProductDescription,
            ProductPrice :props.ProductPrice
        };
    }
    DeleteFromCart(productindex) {
        var json = JSON.parse(localStorage.cart);
        for (let i=0; i < json.length; i++){
            if (json[i].index == productindex){
                json.splice(i,1);
            }
        }
        console.log(json);
        localStorage.cart= JSON.stringify(json);
        this.state = {ProductName: this.props.ProductName};
        window.location.reload();
    }
    render() {
        const index = this.props.index;
        const ImageSrc = ProductList[index].ProductImage;
        const ProductName = this.state.ProductName;
        const ProductDescription = this.state.ProductDescription;
        const ProductPrice = this.state.ProductPrice;
        const ProductInformation ={index,ProductName,ProductDescription,ImageSrc};
        return (
            <div className="CartProduct">
                <img src={ImageSrc} className="Cartimg" alt="pName" /><b> {ProductName}</b> ({ProductDescription}) - -  ${ProductPrice}  - - <button className="DelBtn" onClick={(e) => this.DeleteFromCart(ProductInformation.index)}>Delete</button>
            </div>
        );
    }
}
export default CartProduct;