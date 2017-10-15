import React from 'react';
import {Link} from 'react-router';
import Images from '../../Images/ImageList';
import '../../CSS/App.css';

const Product = ({ProductId, ProductName, ProductDescription, ProductPrice, ProductImage } )=>(
    <div>
        <img src={Images[ProductImage]} className="img" alt="pName" />
        <div>
            <Link to={`/AboutProduct/${ProductId}`}> <h3>{ProductName}</h3> </Link>
            <p>{ProductDescription}</p>
            <p>${ProductPrice}</p>
        </div>
    </div>
);
export default Product;