import {combineReducers, createStore, compose} from 'redux';
import {ProductReducer,CartReducer} from './../Reducers/Reducers';
import {reducer as formReducer} from 'redux-form';


 const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose


let configure = () => {
    let store;
    let reducer = combineReducers({
        Products: ProductReducer,
        cartProducts: CartReducer,
        form:formReducer
    });
    store = createStore(reducer, {
        Products: [],

    }, composeEnhancers());
    return store;
};

export default configure
