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
				  <div className="form-group" >
                      <br/>
					  <div className="row ">
                      <div className="col-md-6"><input name="ProductName" className="form-control" placeholder="name"{...ProductName} required/></div>
                       <br/>
                      <div className="col-md-6"><input name ="ProductDescription" className="form-control"  placeholder="description"{...ProductDescription} required/><br/></div>
                      <br/>
					  </div>
					  <div className="row">
                        <div className="col-md-6"><input name="ProductPrice" className="form-control" placeholder="price"{...ProductPrice} required/></div>
                      <br/>
                       <div className="col-md-6"><input name="ProductImage" className="form-control" placeholder="image"{...ProductImage} required/><br/></div>
					  </div>
                      <button type="submit" className="btn btn-primary" >Add Product</button>
					  </div>
                  </form>
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
                                  <button type="button" className="btn btn-danger" onClick={() => this.props.DeleteFromProduct(post.ProductId)}>Delete</button><br/>
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

