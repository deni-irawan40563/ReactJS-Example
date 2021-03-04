import axios from 'axios'
import React, { Component } from 'react'
import CardProduct from './ProductCard'

export default class ConnectBackEnd extends Component {
  state = {
    product : [],
    postProduct : {
      id : '',
      name : '',
      image : ''
    },
    isUpdate : false
  }
  //Method untuk menget data dari api
  handleGetData = () => {
    axios.get('http://localhost:2000/api/products')
    .then((res) => {
      this.setState({
        product : res.data
      })
    })
  }

    // Cara DELETE api mengunakan Axios
    handleDelete = (id) => {
      axios.delete(`http://localhost:2000/api/products/${id}`).then((res)=>{
        this.handleGetData()
      })
    }
    handlePostData = () => {
      axios.post('http://localhost:2000/api/products', this.state.postProduct)
      .then((res)=>{
        alert(`Submit Data : ${this.state.postProduct.name} Success`);
        this.setState({
          isUpdate : false,
          postProduct : {
            id : '',
            name : '',
            image : ''
          }
        })
        this.handleGetData();
      }, (err)=>{
        alert(`Submit Data : Failed Because ${err}`);
      })
    }
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
    handleUpdate = (data) => {
      this.setState({
        postProduct : data,
        isUpdate : true
      })

    }
    handleUpdateProducts = () => {
      axios.put(`http://localhost:2000/api/products/${this.state.postProduct.id}`, this.state.postProduct).then((res)=>{
        this.handleGetData()
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
    handleSubmit = () => {
      if(!this.state.isUpdate){
          this.handlePostData()
      }else{
        this.handleUpdateProducts()
      }
      
    }

    componentDidMount(){
      //Cara GET api menggunakan fetch tanpa axios
  /*  
      fetch('http://localhost:2000/product')
        .then(response => response.json())
        .then(json => {
          this.setState({
            product : json
          })
          console.log(json) Hasil JSON bisa dilihat di console
        })
  */
  
      // Cara GET api mengunakan Axios
  /*
      axios.get('http://localhost:2000/product')
      .then((res) => {
        console.log(res.data)
        this.setState({
          product : res.data
        })
      })
  */
      this.handleGetData()
    }
    handleGoDetail = (id) => {
      this.props.history.push(`/products/${id}`);
    }
  render() {
    return (
      <div className="container mt-5">
        <h1 className="text-center">Connect Ke Back-end</h1>
        <h3 className="text-center">C.R.U.D</h3>
        <div className="form-group">
          <input type="text" value={this.state.postProduct.name} placeholder="Nama Product" className="input mr-2 p-1" name="name" id="name"  onChange={this.handlePost}/>
          <input type="text" value={this.state.postProduct.image} placeholder="Url Gambar" className="input mr-2 p-1" name="image" id="image" onChange={this.handlePost}/>
          <button className="btn btn-primary ml-2 p-1 mt-0" onClick={this.handleSubmit}>Simpan</button>
        </div>
        <div className="card-group">
          {
            this.state.product.map(product => {
              return <CardProduct key={product.id} data={product} delete={this.handleDelete} update={this.handleUpdate} goDetail={this.handleGoDetail}/>
            })
          }
        </div>
      </div>
    )
  }
}
