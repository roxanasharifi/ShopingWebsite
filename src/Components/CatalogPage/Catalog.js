import React,{Component} from 'react';
import {connect} from 'react-redux';
import Product from './Product';
import CategoriesHeader from './CategoriesHeader';
import {AddToCart} from './../../Actions/Actions';
import '../../CSS/App.css';

class Catalog extends Component {
    render() {
        let {Products} = this.props;
        return (
            <div className="catalog">
                <CategoriesHeader/>
                <div className="App-intro">
                    <h3>- the catalog -</h3>
                    {Products.map((post) =>
                        <div className="Product" key={post.ProductId}>
                            <Product {...post}/>
                            <button onClick={() =>this.props.AddToCart(post)}>add</button>
                        </div>
                    )}
                </div>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        Products: state.Products,
        cartProducts:state.cartProducts

    }
};
export default connect(mapStateToProps,{AddToCart})(Catalog)

