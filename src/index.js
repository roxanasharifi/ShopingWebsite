import React from 'react';
import ReactDOM from 'react-dom';
import {Route,Router,IndexRoute,browserHistory} from 'react-router';

import './CSS/index.css';
import App from './Components/App';
import AdminPage from './Components/AdminPage';
import Catalog from './Components/Catalog';
import CartPage from './Components/CartPage';
import AboutProduct from './Components/AboutProduct';

import registerServiceWorker from './registerServiceWorker';

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

