import React, { Component } from 'react';
import './App.css';
import CartProduct from './CartProduct';


class CartPage extends Component {
    render() {
        const productCart = JSON.parse(localStorage.cart);
        let totalPrice =0;
        productCart.map((post) => {
            totalPrice += post.ProductPrice;
        });
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
                <h3>Total price:</h3>${totalPrice}
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
