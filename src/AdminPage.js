import React, { Component } from 'react';
import './App.css';
import AdminProduct from './AdminProduct';

  class AdminPage extends Component{
      constructor(props) {
          super(props);
          this.state = {
              index : JSON.parse(localStorage.index)
          };
      }
      EmptyLocalStorage(e){
          e.preventDefault();
          localStorage.Product = JSON.stringify([]);
          localStorage.setItem('index',0);
          this.setState({index: 0});
          console.log(JSON.parse(localStorage.Product));
      }
      AddProduct(e) {
          e.preventDefault();
          if (!localStorage.Product) {
              localStorage.Product = JSON.stringify([]);
              this.setState({index: 0});
          }
          let ProductName = this.refs.ProductName.value;
          let ProductDescription =this.refs.ProductDescription.value;
          let ProductPrice = JSON.parse(this.refs.ProductPrice.value);
          let index = this.state.index;
          this.refs.ProductName.value = '';
          this.refs.ProductDescription.value = '';
          this.refs.ProductPrice.value ='';
          const ProductInformation ={index,ProductName,ProductDescription,ProductPrice};
          const data = JSON.parse(localStorage.Product);
          data.push(ProductInformation);
          localStorage.Product = JSON.stringify(data);
          localStorage.setItem('index',JSON.parse(localStorage.index) + 1);
          this.setState({index: JSON.parse(localStorage.index)});
          console.log(JSON.parse(localStorage.Product));
      }
      RenderProducts(){
          let Products = JSON.parse(localStorage.Product);
         return(
             <div>
                 {Products.map((post) =>
                     <span >
                      <AdminProduct {...post}/>
                     </span>
                 )}
             </div>
         );
      }
      render(){
          return(
              <div className="main">
                   <div className="AddForm">
                        <h1>Add New Product</h1>
                        <form id="admin" name="admin">
                              name<input className="txtbox" ref="ProductName" ></input>
                             description <input className="txtbox2" ref="ProductDescription"></input><br/>
                            price <input className="txtbox" ref="ProductPrice"></input>
                            <button className="btns" onClick={(e) => this.EmptyLocalStorage(e)} >Delete all</button> <button onClick={(e) => this.AddProduct(e)} className="btns" >Add Product</button>
                         </form><br/>
                       <hr width="80%"/>
                       <h1>Inventory</h1>
                       {this.RenderProducts()}
                    </div>

              </div>
          );
      }
  }
  export  default AdminPage;