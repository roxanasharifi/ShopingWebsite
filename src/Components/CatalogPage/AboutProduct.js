import React, { Component } from 'react';
import {connect} from 'react-redux';
import {AddToCart} from './../../Actions/Actions';
import '../../CSS/App.css';

class AboutProduct extends Component {
    render() {
        const ProductId = parseInt(this.props.params.ProductId);
        const product = this.props.Products.find(Product => Product.ProductId === ProductId);
        console.log(product);
		return (
            <div className="AboutProduct">
                {/*ERROR*/}
                {/*<h3>{product.ProductName}</h3>*/}
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        Products: state.Products
    }
};
export default connect(mapStateToProps,{AddToCart})(AboutProduct);