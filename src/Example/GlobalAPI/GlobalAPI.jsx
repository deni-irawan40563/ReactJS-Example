import React, { Component } from 'react'
import API from './Services/GlobalAPI'
import ProductCard from '../ConnectBackEnd/ProductCard'
export default class GlobalAPI extends Component {
  state = {
    product : [],
    users : []
  }

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

  componentDidMount(){
    this.getProductsPost()
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
        <div className="card-group">
          {
            this.state.users.map(
              product => {
                  return <ProductCard key={product.id} data={product} />
              }
            )
          }
        </div>
      </div>
    )
  }
}
