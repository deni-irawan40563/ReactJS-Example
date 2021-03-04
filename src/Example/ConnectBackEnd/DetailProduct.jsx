import axios from 'axios'
import React, { Component } from 'react'

export default class DetailProduct extends Component {
  state = {
    products : {
      name: '',
      image: '',
      desc: ''
    }
  }
  componentDidMount(){
    let id = this.props.match.params.id
    console.log(id)
    axios.get(`http://localhost:2000/product/${id}`)
    .then(res => {
      let product = res.data
      this.setState({
        products : {
              name: product.name,
              image: product.image,
              desc: product.desc
        }
      })
    })
  }
  render() {
    return (
      <div className="container mt-5 p-5 text-center">
          <h1>Detail Product</h1>
          <img src={this.state.products.image} className="card-img" alt={this.state.products.name} />
          <div className="card-body text-left borderBox mt-3">
            <h2 className="card-title">{this.state.products.name}</h2>
            <p className="card-text">{this.state.products.desc}</p>
          </div>
      </div>
    )
  }
}
