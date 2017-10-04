import React from 'react';
import ReactDOM from 'react-dom';
import {Route,Router,IndexRoute,browserHistory} from 'react-router';

import './CSS/index.css';
import App from './Components/App';
import AdminPage from './Components/AdminPage/AdminPage';
import Catalog from './Components/CatalogPage/Catalog';
import CartPage from './Components/CartPage/CartPage';
import AboutProduct from './Components/CatalogPage/AboutProduct';

ReactDOM.render(
    <Router history={browserHistory}>
        <Route path="/"  component={App}>
            <IndexRoute component={Catalog}/>
            <Route path="/AboutProduct/:ProductId" component={AboutProduct}/>
            <Route path="/CartPage" component={CartPage}/>
            <Route path="/AdminPage" component={AdminPage}/>
        </Route>
    </Router>,
    document.getElementById('root')
);

