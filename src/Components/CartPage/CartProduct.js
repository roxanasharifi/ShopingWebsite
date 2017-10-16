import React from 'react';
import Images from '../../Images/ImageList';
import '../../CSS/App.css';

const CartProduct =({ ProductName, ProductDescription, ProductPrice, ProductImage })=>(
    <div className="CartProduct">
        <img src={Images[ProductImage]} className="Cartimg" alt="pName" />
        <span className="-bold">  - -   {ProductName}  - -  </span> ({ProductDescription}) - -  ${ProductPrice}
    </div>
);
export default CartProduct;