import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ProductList from './ProductList';
import {Link} from 'react-router';

class App extends Component {
  render() {
    return (
      <div className="App">

          <div className="App-header">

            <img src={logo} className="App-logo" alt="logo" />
              <span className="opt">home</span> <Link to={`/`}><span className="opt">catalog</span></Link> <Link to={`/CartPage`}><span className="opt">CartPage</span></Link> <Link to={`/AdminPage`}><span className="opt">AdminPage</span></Link>
          </div>
          {React.cloneElement(this.props.children,{posts:ProductList})}
      </div>
    );
  }
}
export default App;
