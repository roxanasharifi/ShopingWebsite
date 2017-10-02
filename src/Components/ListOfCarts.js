import React, { Component } from 'react';

import '../CSS/App.css';
import CartProduct from './CartProduct';

class CartProductList extends Component {
    constructor() {
        super();
        this.state = {
            CartProducts : JSON.parse(localStorage.cart)
        };
    }

    DeleteFromCart=(productId)=>{
        let json = this.state.CartProducts;
        for (let i=0; i < json.length; i++){
            if (json[i].index == productId){
                json.splice(i,1);
            }
        }
        this.setState({CartProducts: json});
        localStorage.cart = JSON.stringify(json);
    }

    GetTotalPrice=()=>{
        let CartProducts = this.state.CartProducts;
        let totalPrice = 0;
        CartProducts.reduce((totalPrice,post) => {
            totalPrice += post.ProductPrice;
        },0);
        return(
            <div>
               <h3>Total price:</h3>${totalPrice}
            </div>
        );
    }

    GetCartProducts =()=>{
        let CartProducts = this.state.CartProducts;
        return(
            <div>
                {CartProducts.map((post) =>
                    <span >
                      <CartProduct {...post}/>
                        <button className="DelBtn" onClick={this.DeleteFromCart(post.index)}>Delete</button><br/>
                     </span>
                )}
            </div>
        );
    }
    render(){
        return(
            <div className="carts">
            <h1>- The Cart  -</h1>
            <hr width="80%"/>
                {this.GetCartProducts()}
            <hr width="80%"/>
                {this.GetTotalPrice()}
            </div>
        );
    }
}
export default CartProductList;

