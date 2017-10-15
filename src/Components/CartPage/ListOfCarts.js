import React, { Component } from 'react';
import {connect} from 'react-redux';
import CartProduct from './CartProduct';
import {DeleteFromCart} from './../../Actions/Actions';
import '../../CSS/App.css';

class CartProductList extends Component {
    GetCartTotalPrice = () => {
        let totalPrice=0 ;
        const result = this.props.cartProducts.reduce((totalPrice, CartProducts) => {return totalPrice + JSON.parse(CartProducts.ProductPrice);},0);
        return (<h3>Total price:${result}</h3>);
    };
    render(){
        let {cartProducts,dispatch} = this.props;
        return(
            <div className="carts">
                <h1>- The Cart  -</h1>
                <hr width="80%"/>
                {cartProducts.map((post) =>
                    <span key={post.ProductId}>
                      <CartProduct {...post}/>
                        <button className="DelBtn" onClick={()=> dispatch(DeleteFromCart(post.ProductId))}>Delete</button><br/>
                     </span>
                )}
                <hr width="80%"/>
                {this.GetCartTotalPrice()}<br/>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        cartProducts: state.cartProducts
    }
};
export default connect(mapStateToProps)(CartProductList)


