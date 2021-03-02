import React, { Component } from 'react'
import '../Container.css'
export default class LifeCycle extends Component {
/*=================== Mounting Component =================*/
/*1*/   constructor(props){
          super(props)
          this.state = {
            count : 0
          }
          console.log('constructor')
        }
/*2*/   static getDerivedStateFromProps (props, state) {
          console.log('getDerivedStateFromProps');
          return null;
        }
/*3 Component di render() di tampilkan*/
/*4*/   componentDidMount(){
          console.log('componentDidMount');
          setTimeout(()=>{
            this.setState({
              count : 1
            })
          }, 5000)
        }

/*================== Update Component =================== */
/*1 Kembali ke getDerivedStateFromProps*/
/*2*/   shouldComponentUpdate(nextProps, nextState){
          console.log('shouldComponentUpdate');
          return true;
        }
/*3 Component di render() di tampilkan*/
/*4*/   getSnapshotBeforeUpdate(){
          console.log('getSnapshotBeforeUpdate');
        }
/*5*/   componentDidUpdate(){
          console.log('componentDidUpdate');
        }

/*================== UnMounting Component =================== */
/*1*/   componentWillUnmount(){
          console.log('componentWillUnmount');
        }



  render() {
    console.log('render')
    return (
      <div className="container mt-5 p-3">
        <h1 className="text-center">Life Cycle Component In React.js</h1>
        <small>* Lihat Console</small>
        <h1 className="text-center">Nilai : {this.state.count}</h1>
        <img src="https://pbs.twimg.com/media/DZ-97vzW4AAbcZj.jpg:large" alt="LifeCycle Diagram" className="img"/>
      </div>
    )
  }
}
