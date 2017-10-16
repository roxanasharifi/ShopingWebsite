import React from 'react';
import ReactDOM from 'react-dom';
import {Route,Router,IndexRoute,browserHistory} from 'react-router';
import {Provider} from 'react-redux';
import App from './Components/App';
import AdminPage from './Components/AdminPage/AdminPage';
import Catalog from './Components/CatalogPage/Catalog';
import CartPage from './Components/CartPage/CartPage';
import AboutProduct from './Components/CatalogPage/AboutProduct';
import configure from './Store/ConfigureStore';
import './CSS/index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';
const store = configure();
store.subscribe(() => {
    console.log('New state', store.getState().Products);
    console.log('length',(store.getState().Products).length);
    if((store.getState().Products).length>0){
        localStorage.setItem('Products',JSON.stringify(store.getState().Products));
    }
    console.log('product-localStorage',JSON.parse(localStorage.getItem('Products')));
});
ReactDOM.render(
    <Provider store={store}>
        <Router history={browserHistory} >
            <Route path="/"  component={App}>
                <IndexRoute component={Catalog}/>
                <Route path="/AboutProduct/:ProductId" component={AboutProduct}/>
                <Route path="/CartPage" component={CartPage}/>
                <Route path="/AdminPage" component={AdminPage}/>
            </Route>
        </Router>
    </Provider>,
    document.getElementById('root')
);

