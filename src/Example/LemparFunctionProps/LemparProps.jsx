import React, { Component } from 'react'
import State from './Component'

export default class LemparProps extends Component {
  state = {
    order : 0
  }

  handleCounterChange = (newValue) => {
    this.setState({
      order: newValue
    })
  }

  render() {
    return (
      <div className="container p-5 mt-5">
        <small>* Ini Parent Component</small>
        <h1>Hasil : {this.state.order}</h1>
        <State onCounterChange={(value) => this.handleCounterChange(value)}/>
        <small>* Ini contoh cara mengupdate Parent oleh child component </small>
      </div>
    )
  }
}

