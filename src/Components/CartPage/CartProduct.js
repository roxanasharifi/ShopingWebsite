import React, { Component } from 'react';

import '../../CSS/App.css';
import Images from '../../Images/ImageList';

const CartProduct =({ ProductName, ProductDescription, ProductPrice, ProductImage })=>(
    <div className="CartProduct">
        <img src={Images[ProductImage]} className="Cartimg" alt="pName" />
        <b> {ProductName}</b> ({ProductDescription}) - -  ${ProductPrice}
    </div>
);

export default CartProduct;