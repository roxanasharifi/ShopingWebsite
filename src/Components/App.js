import React,{Component} from 'react';
import {Link} from 'react-router';
import logo1 from './../Images/Logo1.svg';
import logo2 from './../Images/Logo2.svg';

import '../CSS/App.css';

class App extends Component {
  render() {
    return (
      <div className="App container">
          <div className="App-header">
              <img src={logo1} className="App-logo" alt="pName" />
              <Link to={`/`}><span className="opt">home</span></Link>
              <Link to={`/`}><span className="opt">catalog</span></Link>
              <Link to={`/CartPage`}><span className="opt">CartPage</span></Link>
              <Link to={`/AdminPage`}><span className="opt">AdminPage</span></Link>
              <Link to={`/`}><span className="opt">About</span></Link>
              <Link to={`/`}><span className="opt">Contact</span></Link>
          </div>
          {React.cloneElement(this.props.children)}
          <div className="footer">
              <img src={logo2} className="App-logo-footer" alt="pName" /><br/>

              <ul className="list-inline">
                  <li className="list-inline">
                      <a href="#"><i className="fa fa-twitter fa-fw fa-3x"> </i></a>
                  </li>
                  <li className="list-inline">
                      <a href="#"><i className="fa fa-telegram fa-fw fa-3x"> </i></a>
                  </li>
                  <li className="list-inline">
                      <a href="#"><i className="fa fa-facebook fa-fw fa-3x"> </i></a>
                  </li>
              </ul><br/>
              <span className="App-Footer">Copyright 2017 URBAN shoes,All rights reserved</span>

          </div>
      </div>

    );
  }
}
export default App;
