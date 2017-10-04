import React, { Component } from 'react';
import {Link} from 'react-router';

import '../../CSS/App.css';
import Images from '../../Images/ImageList';

const Product = ({ProductId, ProductName, ProductDescription, ProductPrice, ProductImage } )=>(
            <div>
                <img src={Images[ProductImage]} className="img" alt="pName" />
                <div>
                    <Link to={`/AboutProduct/${ProductId}`}> <h3>{ProductName}</h3> </Link>
                    <p>{ProductDescription}</p>
                    <p>{ProductPrice}</p>
                </div>
            </div>
)
export default Product;