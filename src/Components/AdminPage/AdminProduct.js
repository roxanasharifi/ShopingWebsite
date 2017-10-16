import React from 'react'
import '../../CSS/App.css'
import Images from '../../Images/ImageList'

const AdminProduct = ({ ProductName, ProductDescription, ProductPrice, ProductImage }) => (
    <div className="AdminProduct">
        <img src={Images[ProductImage]} className="Cartimg" alt="pName" />
        <span className="-bold"> - -  {ProductName}  - -  </span>
        ({ProductDescription})  - -  ${ProductPrice}  - -
    </div>
);

export default AdminProduct