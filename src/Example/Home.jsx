import React from 'react'
import {Link} from 'react-router-dom'
import './Home.css'

export default function Home() {
  return (
    <div>
        <div className="App">
        <Link to="/statefull" className="ButtonLink">StateFull Component</Link>
        <Link to="/stateless" className="ButtonLink">StateLess Component</Link>
        <Link to="/props" className="ButtonLink">Props</Link>
        <Link to="/state" className="ButtonLink">State</Link>
        <Link to="/lemparprops" className="ButtonLink">Lempar Function Props</Link>
        <Link to="/lifecycle" className="ButtonLink">Life Cycle Component</Link>
      </div>
    </div>
  )
}
