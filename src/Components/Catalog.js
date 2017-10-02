import React, { Component } from 'react';

import '../CSS/App.css';
import Product from './Product';
import CategoriesHeader from './CategoriesHeader';

class catalog extends Component {
    GetCatalogList =()=> {
        let ProductList = JSON.parse(localStorage.Product);
        return (
            <div className="App-intro">
                <h3>- the catalog -</h3>
                {ProductList.map((post) =>
                    <span key={post.ProductName}>
                      <Product {...post}/>
                  </span>
                )}
            </div>
        );
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
