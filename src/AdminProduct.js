import React, { Component } from 'react';
import './App.css';
import ProductList from './ProductList';
class AdminProduct extends Component {
    constructor(props) {
        super(props);
        this.state = {
            index: props.index,
            ProductName : props.ProductName,
            ProductDescription : props.ProductDescription,
            ProductPrice :props.ProductPrice
        };
    }
    DeleteFromProduct(productindex) {
        var json = JSON.parse(localStorage.Product);
        for (let i=0; i < json.length; i++){
            if (json[i].index == productindex){
                json.splice(i,1);
            }
        }
        console.log(json);
        localStorage.Product= JSON.stringify(json);
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
            <div className="AdminProduct">
                <img src={ImageSrc} className="Cartimg" alt="pName" /><b> {ProductName}</b> ({ProductDescription}) - -  ${ProductPrice}  - - <button className="DelBtn" onClick={(e) => this.DeleteFromProduct(ProductInformation.index)}>Delete</button>
            </div>
        );
    }
}
export default AdminProduct;