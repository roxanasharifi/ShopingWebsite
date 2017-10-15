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
const store = configure();
store.subscribe(() => {
    console.log('New state', store.getState());
});
ReactDOM.render(
    <Provider store={store}>
        <Router history={browserHistory}>
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

