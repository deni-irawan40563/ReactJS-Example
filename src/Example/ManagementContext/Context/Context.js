import React, {createContext, Component} from 'react'

export const RootContext = createContext()
const Provider = RootContext.Provider

const contextManagement = (Children) => {
  return (
    class parentContext extends Component {
      state = {
        totalCount : 6
      }
      
      dispatch = (action) => {
        if(action.type === "PLUS_BTN") {
          this.setState({
            totalCount : this.state.totalCount + 1
          })
        }
        if(action.type === "MINUS_BTN") {
          if(this.state.totalCount > 0){
            this.setState({
              totalCount : this.state.totalCount - 1
            })
          }
        }
      }
      render() {
        return (
          <Provider value={{
            state: this.state,
            dispatch: this.dispatch
          }}>
            <Children {...this.props}{...this.state}/>
          </Provider>
        )
      }
    }
    
  )
}

export default contextManagement

// const Consumer = Provider.Consumer;
// export const GlobalConsumer = (Children) => {
//   return (
//     class parentConsumer extends Component {
//           render() {
//             return (
//               <Consumer >
//                 {
//                   value => {
//                     return (
//                       <Children {...this.props} {...value}/>
//                     )
//                   }
//                 }
//               </Consumer>
//         )
//       }
//     }
//   )
// }