import React, { Component } from 'react';
import {reduxForm} from 'redux-form';
import {connect} from 'react-redux'
import AdminProduct from './AdminProduct';
import {AddToProduct,DeleteFromProduct} from './../../Actions/Actions';
import '../../CSS/App.css';

class AdminPage extends Component{
      renderAdminForm=()=>{
          const {fields:{ProductName,ProductDescription,ProductPrice,ProductImage},handleSubmit} = this.props;
          return(
              <div>
                  <h1>Add New Product</h1>
                  <form onSubmit={handleSubmit(this.props.AddToProduct)}>
                      <label>Name </label>
                      <input name="ProductName" className="AdminFormInput1"{...ProductName} required/>
                      <label>Description</label>
                      <input name ="ProductDescription" className="AdminFormInput2"{...ProductDescription} required/><br/>
                      <label>Price</label>
                      <input name="ProductPrice" className="AdminFormInput1"{...ProductPrice} required/>
                      <label>Image</label>
                      <input name="ProductImage" className="AdminFormInput1"{...ProductImage} required/>
                      <button type="submit" className="AdminFormBtns" >Add Product</button>
                  </form><br/>
                  <hr width="80%"/>
              </div>
          );
      };
      render(){
          return(
              <div className="main">
                  <div className="AdminAddForm">
                      {this.renderAdminForm()}
                      <h1>Inventory</h1>
                      {this.props.Products.map((post) =>
                          <span key={post.ProductId}>
                                  <AdminProduct {...post}/>
                                  <button className="DelBtn" onClick={() => this.props.DeleteFromProduct(post.ProductId)}>Delete</button><br/>
                          </span>
                      )}
                  </div>
              </div>
          );
      }
  }
const mapStateToProps = (state) => {
    return {
        Products: state.Products
    }
};
  AdminPage = reduxForm({
      form: 'formReducer',
      fields:['ProductName','ProductDescription','ProductPrice','ProductImage']
  })(AdminPage);

export  default  connect(mapStateToProps,{AddToProduct,DeleteFromProduct})(AdminPage)

