import React, { Component } from 'react';
import {Link} from 'react-router';

import logo from '../Images/logo.svg';
import '../CSS/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <div className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <Link to={`/`}><span className="opt">catalog</span></Link>
              <Link to={`/CartPage`}><span className="opt">CartPage</span></Link>
              <Link to={`/AdminPage`}><span className="opt">AdminPage</span></Link>
          </div>
          {React.cloneElement(this.props.children)}
      </div>
    );
  }
}
export default App;
