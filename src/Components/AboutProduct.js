import React, { Component } from 'react';

import '../CSS/App.css';
import Images from '../Images/ImageList';

class AboutProduct extends Component {
    constructor() {
        super();
        this.state = {
            Products : JSON.parse(localStorage.Product)
        };
    }
    GetProductInfo =()=>{
        let ProductId = this.props.params.ProductId;
        let productInfo={};
        var json = this.state.Products;
        for (let i=0; i < json.length; i++){
            if (json[i].index == ProductId){
                productInfo = json[i];
            }
        }
        let imgSrc = Images[productInfo.ProductImage];
        return(
            <div>
                <img src={imgSrc} className="ProductImg" alt="pName" />
                <h3>{ productInfo.ProductName}</h3>
                <p>{productInfo.ProductDescription}</p>
                <p>${productInfo.ProductPrice}</p>
            </div>
        );
    }
    render() {
		return (
            <div className="AboutProduct">
                {this.GetProductInfo()}
            </div>
        );
    }
}
export default AboutProduct;