import React, { Component } from 'react';

import '../../CSS/App.css';
import AdminProduct from './AdminProduct';

  class AdminPage extends Component{
      constructor() {
          super();
          this.state = {
              ProductId : 0,
              Products :[],
              ProductName:'',
              ProductDescription:'',
              ProductPrice: '',
              ProductImage: ''
          };
      }
      componentDidMount() {
          if (localStorage.ProductId) {
              this.setState({
                  ProductId: JSON.parse(localStorage.ProductId)
              })
          }
          if (localStorage.Product) {
              this.setState({
                  Products: JSON.parse(localStorage.Product)
              })
          }
      }
      EmptyLocalStorage = (e) => {
          e.preventDefault();
          localStorage.Product = JSON.stringify([]);
          localStorage.setItem('ProductId',0);
          this.setState({ProductId: 0});
          this.setState({Products:[]});
      }

      DeleteFromProducts = (post) => {
          const json = this.state.Products.filter((item) => item.ProductId !== post.ProductId);
          this.setState({Products:json});
          localStorage.Product = JSON.stringify(json);
      }

      renderAdminForm=()=>{
          return(
              <div>
                  <h1>Add New Product</h1>
                  <form onSubmit={this.handleSubmit}>
                      name <input name="ProductName" className="AdminFormInput1" value={this.state.ProductName} onChange={(e)=>this.handleChange(e,'ProductName')}/>
                      desc <input name ="ProductDescription" className="AdminFormInput2" value={this.state.ProductDescription} onChange={(e)=>this.handleChange(e,'ProductDescription')} /><br/>
                      price<input name="ProductPrice" className="AdminFormInput1" value={this.state.ProductPrice} onChange={(e)=>this.handleChange(e,'ProductPrice')} />
                      Image<input name="ProductImage" className="AdminFormInput1" value={this.state.ProductImage} onChange={(e)=>this.handleChange(e,'ProductImage')} />
                      <button name="DeleteAll"  className="AdminFormBtns" onClick={this.EmptyLocalStorage}>Delete all</button>
                      <button name="AddProduct" className="AdminFormBtns" >Add Product</button>
                  </form><br/>
                  <hr width="80%"/>
              </div>
          );
      }
      renderProducts = () => {
         return(
             <div>
                 <h1>Inventory</h1>
                 {this.state.Products.map((post) =>
                     <span key={post.ProductId} >
                      <AdminProduct {...post}/>
                         <button className="DelBtn" onClick={(e) => this.DeleteFromProducts(post)}>Delete</button><br/>
                     </span>
                 )}
             </div>
         );
      };
      handleSubmit =(event)=>{
          event.preventDefault();
          const {ProductId,ProductName,ProductDescription,ProductPrice,ProductImage} = this.state;
          const ProductInformation ={ProductId,ProductName,ProductDescription,ProductPrice,ProductImage};
          const data = this.state.Products;
          data.push(ProductInformation);
          localStorage.Product = JSON.stringify(data);
          localStorage.setItem('ProductId',JSON.parse(localStorage.ProductId) + 1);
          this.setState({Products:data,ProductId: JSON.parse(localStorage.ProductId),ProductDescription:'',ProductName:'',ProductPrice:'',ProductImage:''});
      }
      handleChange =(event,ProductInfo)=> {
          this.setState({ [ProductInfo]: event.target.value});
      }
      render(){
          return(
              <div className="main">
                   <div className="AdminAddForm">

                       {this.renderAdminForm()}
                       {this.renderProducts()}

                    </div>
              </div>
          );
      }
  }
  export  default AdminPage;