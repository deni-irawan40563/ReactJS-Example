import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {RootContext} from './Context/Context'


class Context extends Component {
  render() {
    return (
      <RootContext.Consumer>
        {
          value => {
            return (
              <div className="container mt-5 p-5 text-center">
              {console.log(value.state)}
              <h1>State Management Dengan Context</h1>
              <Link to="/context/child" className="btn btn-primary">child Component</Link>
              <h1>Count Dari Child Lewat Context : <br /> {value.state.totalCount}</h1>
              <small>* Lihat di Context/Context.js untuk config</small>
            </div>  
            )
          }
        }
      </RootContext.Consumer>
    )
  }
}

export default Context