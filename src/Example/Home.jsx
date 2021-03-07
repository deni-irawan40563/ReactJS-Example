import React,{Component} from 'react'
import {Link} from 'react-router-dom'
import './Home.css'
export default class Home extends Component {
  render(){
    return (
        <div>
            <div className="App">
            <Link to="/statefull" className="ButtonLink">StateFull Component</Link>
            <Link to="/stateless" className="ButtonLink">StateLess Component</Link>
            <Link to="/props" className="ButtonLink">Props</Link>
            <Link to="/state" className="ButtonLink">State</Link>
            <Link to="/lemparprops" className="ButtonLink">Lempar Function Props</Link>
            <Link to="/lifecycle" className="ButtonLink">Life Cycle Component</Link>
            <Link to="/connectbackend" className="ButtonLink">Berintraksi dengan BackEnd</Link>
            <Link to="/router" className="ButtonLink">React Router</Link>
            <Link to="/context" className="ButtonLink">State Management Context</Link>
            <Link to="/globalapi" className="ButtonLink">Global API</Link>
            <Link to="/reacthooks" className="ButtonLink">React Hooks</Link>
          </div>
        </div>
    )
  }
}
