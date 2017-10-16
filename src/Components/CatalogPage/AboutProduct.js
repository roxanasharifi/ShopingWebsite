import React, { Component } from 'react';
import {connect} from 'react-redux';
import {AddToCart} from './../../Actions/Actions';
import Images from '../../Images/ImageList';
import '../../CSS/App.css';

class AboutProduct extends Component {
    render() {
        const ProductId = parseInt(this.props.params.ProductId);
        const product = this.props.Products.find(Product => Product.ProductId === ProductId);
		return (
            <div className="AboutProduct">
                <img src={product && Images[product.ProductImage]} className="aboutImg" alt="pName" />
                <h2>{product && product.ProductName}</h2>
                <h6>{product && product.ProductDescription}</h6>
                <p>{product && product.ProductPrice}</p>
                <button className="btn btn-primary" onClick={() =>this.props.AddToCart(product)}>Add to CART</button>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        Products: state.Products,
        cartProducts:state.cartProducts
    }
};
export default connect(mapStateToProps,{AddToCart})(AboutProduct);