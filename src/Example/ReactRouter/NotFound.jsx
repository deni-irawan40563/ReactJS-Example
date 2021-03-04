/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class NotFound extends Component {
  render() {
    return (
      <div className="container p-5 mt-5 text-center">
        <img src="https://www.pngkey.com/png/full/185-1853246_well-because-most-of-the-time-it-is.png" className="card-img-top"/>
        <h1 className="">I DON'T KNOW THIS PAGE BRO...</h1>
        <Link to="/">Back to Home</Link>
      </div>
    )
  }
}
