import React, { Component } from 'react';

import '../../CSS/App.css';
import CartProduct from './CartProduct';

class CartProductList extends Component {
    constructor(props) {
        super();
        this.state = {
            cartProducts :[],
        };
    }
    componentDidMount() {
        if (localStorage.cart) {
            this.setState({
                cartProducts: JSON.parse(localStorage.cart)
            })
        }
    }
    DeleteFromCart=(productId)=>{
        const json = this.state.cartProducts.filter((item) => item.ProductId !== productId);
        this.setState({cartProducts:json});
        localStorage.cart = JSON.stringify(json);
    }

    /*GetTotalPrice=()=>{

    }*/

    GetCartProducts =()=>{
        return(
            <div>
                <h1>- The Cart  -</h1>
                <hr width="80%"/>
                {this.state.cartProducts.map((post) =>
                    <span key={post.ProductId}>
                      <CartProduct {...post}/>
                        <button className="DelBtn" onClick={()=>this.DeleteFromCart(post.ProductId)}>Delete</button><br/>
                     </span>
                )}
                <hr width="80%"/>
            </div>
        );
    }
    render(){
        return(
            <div className="carts">
                {this.GetCartProducts()}
                {/*{this.GetTotalPrice()}*/}<br/>
            </div>

        );
    }
}
export default CartProductList;

