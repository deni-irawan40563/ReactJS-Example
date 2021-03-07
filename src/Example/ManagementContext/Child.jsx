import React, { Component } from 'react'
import {RootContext} from './Context/Context'

class Child extends Component {
  render() {
    return (
      <RootContext.Consumer>
        {
          value => {
            return (
              <div className="container p-5 mt-4 text-center">
              <h1>Hallo</h1>
              {console.log('value :', value)}
              <h1>Count {value.state.totalCount}</h1>
              <div className="btn-group">
                <button className="btn btn-primary" onClick={()=> value.dispatch({type : "PLUS_BTN"})}>+</button>
                <button className="btn btn-danger" onClick={()=> value.dispatch({type : "MINUS_BTN"})}>-</button>
              </div>
              </div>
            )
          }
        }
      </RootContext.Consumer>
    )
  }
}

export default Child