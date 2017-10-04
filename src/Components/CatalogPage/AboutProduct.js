import React, { Component } from 'react';

import '../../CSS/App.css';
/*import Images from '../../Images/ImageList';*/

class AboutProduct extends Component {
    constructor(props) {
        super();
        this.state = {
            Products :[]
        };
    }
    componentDidMount() {
        if (localStorage.Product) {
            this.setState({
                Products: JSON.parse(localStorage.Product)
            })
        }
    }
    /*renderProduct=()=>{
        const ProductId = this.props.params.ProductId;
        let productInfo = this.state.Products.filter((item) => item.ProductId !== ProductId );
        return(
            <div>
                <img src={Images[productInfo.ProductImage]} className="ProductImg" alt="pName" />
                <h3>{productInfo.ProductName}</h3>
                <p>{productInfo.ProductDescription}</p>
                <p>${productInfo.ProductPrice}</p>
            </div>
        );
    }*/
    render() {
		return (
            <div className="AboutProduct">
                {/*{this.renderProduct()}*/}
            </div>
        );
    }
}
export default AboutProduct;