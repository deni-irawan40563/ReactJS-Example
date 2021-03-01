import React, { Component } from 'react'

export default class State extends Component {
  state = {
    order : 0
  }
  PlusHandle = () => {
    this.setState({
      order: this.state.order + 1
    })
  }
  minusHandle = () => {
    if(this.state.order > 0){
      this.setState({
        order: this.state.order - 1
      })
    }
  }
  render() {
    return (
      <div className="container mt-5 text-center p-5">
        <h1>Contoh kalkulasi</h1>
        <div class="btn-group" role="group">
        <button type="button" class="btn btn-secondary" onClick={this.minusHandle}>-</button>
        <button type="button" className="btn btn-primary">
          Hasil <span className="badge badge-light">{this.state.order}</span>
        </button>
          <button type="button" class="btn btn-secondary" onClick={this.PlusHandle}>+</button>
        </div>
      </div>
    )
  }
}
