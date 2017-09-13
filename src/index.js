import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import ProductList from './ProductList'
import {Route,Router,IndexRoute,hashHistory} from  'react-router';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    /*<Router history={hashHistory}>
        <Route path="/">

        </Route>

    </Router>,*/

    <App posts={ProductList} />,
    document.getElementById('root')
);
registerServiceWorker();
