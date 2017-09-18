import React, { Component } from 'react';
import './App.css';
import CartProduct from './CartProduct';
class CartPage extends Component {

    render() {
        const productCart = JSON.parse(localStorage.cart);
        const Products = (
            <div className="carts">
                <h1>- The Cart  -</h1>
                <hr width="80%"/>
                {productCart.map((post) =>
                    <span >
                      <CartProduct {...post}/>
                     </span>
                )}
                <hr width="80%"/>
            </div>
        );
        return (
            <div className="cartlist">
                {Products}
            </div>
        );
    }
}
export default CartPage;
