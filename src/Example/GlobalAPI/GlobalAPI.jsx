import React, { Component } from 'react'
import API from './Services/index'
import ProductCard from '../ConnectBackEnd/ProductCard'
export default class GlobalAPI extends Component {
  state = {
    product : [],
    users : [],
    postProduct : {
      id : '',
      name : '',
      image : ''
    },
    isUpdate : false
  }

  //Post Data From API
  handlePostData = () => {
    API.postProducts(this.state.postProduct)
    .then((res)=>{
      alert(`Submit Data : ${this.state.postProduct.name} status ${res.status} Success`);
      this.setState({
        isUpdate : false,
        postProduct : {
          id : '',
          name : '',
          image : ''
        }
      })
      this.getProductsPost()
    }, (err)=>{
      alert(`Submit Data : Failed Because ${err}`);
    })
  }

  //Create Id Data
  handlePost = (event) => {
    let newPostProduct = {...this.state.postProduct}; //Mengclone object state postProduct
    let crypto = require("crypto");
    let createId = crypto.randomBytes(5).toString('hex');
    if(!this.state.isUpdate){
        newPostProduct['id'] = createId
    }
    newPostProduct[event.target.name] = event.target.value //Menentukan target lewat name
    this.setState({
      postProduct : newPostProduct
    })
  }

  //Read Data From API
  getProductsPost = () => {
    API.getProducts()
    .then(res => {
      this.setState({
        product : res
      })
    })

    API.getUser()
    .then(res => {
      this.setState({
        users : res
      })
    })
  }
  //Update Data From API
  handleUpdate = (data) => {
    this.setState({
      postProduct : data,
      isUpdate : true
    })

  }
  handleUpdateProducts = () => {
    API.updateData(this.state.postProduct.id, this.state.postProduct)
    .then((res)=>{
      this.getProductsPost()
      this.setState({
        isUpdate : false,
        postProduct : {
          id : '',
          name : '',
          image : ''
        }
      })
    }, (err) => {
      alert(err)
    })      
  }
  //Delete Data From API
  handleDelete = (id) => {
    API.deleteData(id)
    .then(res => {
      alert(`delete data is ${res.statusText} status ${res.status}`)
      this.getProductsPost()
    })
    
  }

  componentDidMount(){
    this.getProductsPost()
  }

  handleSubmit = () => {
    if(!this.state.isUpdate){
        this.handlePostData()
    }else{
      this.handleUpdateProducts()
    }
  }

  render() {
    return (
      <div className="container mt-5 p-5 text-center">
        <h1>Global API</h1>
        <div className="container p-5 mt-4">
          <div className="row">
            <div className="col">
                <h5 className="text-left">Data from default API</h5>
                <ul className="text-left">
                  {
                    this.state.product.map(
                      product => {
                          return <li>{product.name}</li>
                      }
                    )
                  }
                </ul>
            </div>
            <div className="col">
              <h5 className="text-left">Data from external API</h5>
              <ul className="text-left">
                  {
                    this.state.users.map(
                      user => {
                          return <li>{user.name}</li>
                      }
                    )
                  }
                </ul>
            </div>
          </div>
        </div>
        <div className="form-group mt-4">
          <input type="text" value={this.state.postProduct.name} placeholder="Nama Product" className="input mr-2 p-1" name="name" id="name"  onChange={this.handlePost}/>
          <input type="text" value={this.state.postProduct.image} placeholder="Url Gambar" className="input mr-2 p-1" name="image" id="image" onChange={this.handlePost}/>
          <button className="btn btn-primary ml-2 p-1 mt-0" onClick={this.handleSubmit}>Simpan</button>
        </div>
        <div className="card-group">
          {
            this.state.product.map(
              product => {
                  return <ProductCard key={product.id} data={product} delete={this.handleDelete} update={this.handleUpdate} />
              }
            )
          }
        </div>
      </div>
    )
  }
}
