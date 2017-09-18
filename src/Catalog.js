import React, { Component } from 'react';
import './App.css';
import Product from './Product';

class catalog extends Component {
    render() {

        const Products = (
            <div className="App-intro">

                {this.props.posts.map((post) =>
                    <span key={post.ProductName}>
                      <Product {...post}/>
                  </span>
                )}
            </div>
        );
        return (

            <div className="catalog">
                <div className="App-header2">
                    <p> categories : <span className="opt">option1</span> <span className="opt">option2</span> <span className="opt">option2</span> <span className="opt">option2</span></p>
                </div>
                <h3>- the catalog -</h3>
                {Products}
            </div>
        );
    }
}
export default catalog;
