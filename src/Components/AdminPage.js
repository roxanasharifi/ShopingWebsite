import React, { Component } from 'react';

import '../CSS/App.css';
import AdminProduct from './AdminProduct';

  class AdminPage extends Component{
      constructor(props) {
          super(props);
          this.state = {
              index : JSON.parse(localStorage.index),
              Products :JSON.parse(localStorage.Product)
  };
      }
      EmptyLocalStorage = (e) => {
          e.preventDefault();
          localStorage.Product = JSON.stringify([]);
          localStorage.setItem('index',0);
          this.setState({index: 0});
          this.setState({Products:[]});
      }

      AddProduct = (e) => {
          e.preventDefault();
          if (!localStorage.Product) {
              localStorage.Product = JSON.stringify([]);
              this.setState({index: 0});
          }
          let id = this.state.index;
          let ProductName = this.refs.ProductName.value;
          let ProductDescription =this.refs.ProductDescription.value;
          let ProductPrice = JSON.parse(this.refs.ProductPrice.value);
          let ProductImage =JSON.parse(this.refs.ProductImage.value);
          const ProductInformation ={id,ProductName,ProductDescription,ProductPrice,ProductImage};

          this.refs.ProductName.value = '';
          this.refs.ProductDescription.value = '';
          this.refs.ProductPrice.value ='';
          this.refs.ProductImage.value ='';


          const data = JSON.parse(localStorage.Product);
          data.push(ProductInformation);
          this.setState({Products:data });
          localStorage.Product = JSON.stringify(data);

          localStorage.setItem('index',JSON.parse(localStorage.index) + 1);
          this.setState({index: JSON.parse(localStorage.index)});
          console.log(JSON.parse(localStorage.Product));
      }
      DeleteFromProduct = (index) => {
          // console.log("product id that is send is: "+productId);
          const json = this.state.Products.filter((item, itemIndex) => itemIndex === index);

          // var i = json.length;
          // console.log("leng1th is: " + i);
          // while(i--){
          //     if (json[i].id === productId){
          //         console.log("Product id compares with : " +json[i].id );
          //         json.splice(i,1);
          //         console.log( "index of the product that is deleted : "+i);
          //     }
          // }
          // console.log("result is: "+ JSON.stringify(json));

          this.setState({Products:json});
          // localStorage.Product = JSON.stringify(json);
      }
      RenderProducts = () => {
          let Products = this.state.Products;
         return(
             <div>
                 {Products.map((post, index) =>
                     <span >
                      <AdminProduct {...post}/>
                         <button className="DelBtn" onClick={() => this.DeleteFromProduct(index)}>Delete</button><br/>
                     </span>
                 )}
             </div>
         );
      };

      render(){
          return(
              <div className="main">
                   <div className="AdminAddForm">
                        <h1>Add New Product</h1>
                        <form>
                            name <input name="ProductName" className="AdminFormInput1" ref="ProductName" />
                            desc <input name ="ProductDescription" className="AdminFormInput2" ref="ProductDescription" /><br/>
                            price<input name="ProductPrice" className="AdminFormInput1" ref="ProductPrice" />
                            Image<input name="ProductImage" className="AdminFormInput1" ref="ProductImage" />
                            <button name="DeleteAll"  className="AdminFormBtns" onClick={this.EmptyLocalStorage}>Delete all</button>
                            <button name="AddProduct" className="AdminFormBtns" onClick={this.AddProduct} >Add Product</button>
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