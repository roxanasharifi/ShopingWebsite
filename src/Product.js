import React, { Component } from 'react';
import './App.css';

class Product extends Component {

    render() {
        return (
            <div className="Product">
                <img src={this.props.src} className="img" alt="pName" />
                <div>
                    <h3>{this.props.name}</h3>
                    <p>{this.props.text}</p>
                </div>

            </div>
        );
    }
}
export default Product;