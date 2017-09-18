import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Catalog from './Catalog';
import CartPage from './CartPage';
import AboutProduct from './AboutProduct';
import {Route,Router,IndexRoute,hashHistory} from  'react-router';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/"  component={App}>
            <IndexRoute component={Catalog}/>
            <Route path="/AboutProduct/:value" component={AboutProduct}/>
            <Route path="/CartPage" component={CartPage}/>

        </Route>
    </Router>,
    document.getElementById('root')
);
registerServiceWorker();
