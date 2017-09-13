import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Product from './Product';
class App extends Component {
  render() {
      console.count();
      const Products = (
          <div className="App-intro">

              {this.props.posts.map((post) =>
                  <span key={post.ProductName}>
                      <Product name={post.ProductName} text={post.ProductDescription} src={post.ProductImage}/>
                  </span>
              )}
          </div>
      );
    return (
      <div className="App">
        <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <span className="opt">home</span> <span className="opt">catalog</span> <span className="opt">about</span> <span className="opt">contact</span>
        </div>
          <div className="App-header2">
              <p> categoriez : <span className="opt">option1</span> <span className="opt">option2</span> <span className="opt">option2</span> <span className="opt">option2</span></p>
          </div>
          <h3>- the catalog -</h3>
          {Products}
      </div>
    );
  }
}
export default App;
