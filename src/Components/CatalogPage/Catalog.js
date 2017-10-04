import React, { Component } from 'react';

import '../../CSS/App.css';
import Product from './Product';
import CategoriesHeader from './CategoriesHeader';

class catalog extends Component {
    constructor(props) {
        super();
        this.state = {
            cartProducts : [],
            Products :[]
        };
    }
    componentDidMount() {
        if (localStorage.cart) {
            this.setState({
                cartProducts: JSON.parse(localStorage.cart)
            })
        }
        if (localStorage.Product) {
            this.setState({
                Products: JSON.parse(localStorage.Product)
            })
        }
    }
    GetCatalogList =()=> {
        return (
            <div className="App-intro">
                <h3>- the catalog -</h3>
                {this.state.Products.map((post) =>
                    <div className="Product" key={post.ProductId}>
                        <Product {...post}/>
                        <button onClick={() => this.AddToCart(post)}>add</button>
                    </div>
                )}
            </div>
        );
    }

    AddToCart =(post)=> {
        const cartProducts = this.state.cartProducts;
        cartProducts.push(post);
        localStorage.cart = JSON.stringify(cartProducts);
        this.setState({cartProducts: cartProducts});
    }

    render() {
        return (
            <div className="catalog">
                <CategoriesHeader/>
                {this.GetCatalogList()}
            </div>
        );
    }
}
export default catalog;
