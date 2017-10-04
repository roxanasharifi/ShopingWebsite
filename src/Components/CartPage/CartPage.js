import React, { Component } from 'react';

import '../../CSS/App.css';
import CartProductList from './ListOfCarts';

class CartPage extends Component {
    render() {
        return (
            <div className="cartlist">
                <CartProductList />
            </div>
        );
    }
}
export default CartPage;
