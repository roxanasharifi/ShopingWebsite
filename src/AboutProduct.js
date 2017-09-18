import React, { Component } from 'react';
import './App.css';
import ProductList from './ProductList';

class AboutProduct extends Component {
    render() {
		const index = this.props.params.value;
		const ProductName = ProductList[index].ProductName;
		const ProductDescription = ProductList[index].ProductDescription;
		const ImageSrc = ProductList[index].ProductImage;
		const ProductInformation ={index,ProductName,ProductDescription,ImageSrc};
		return (
            <div className="AboutProduct">

                <img src={ImageSrc} className="ProductImg" alt="pName" />
                <div>
                    <h3>{ProductName}</h3>
                    <p>{ProductDescription}</p>
                </div>

            </div>
        );
    }
}
export default AboutProduct;