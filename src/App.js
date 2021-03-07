import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Props from './Example/Props/Props.jsx'
import Home from './Example/Home.jsx'
import Statefull from './Example/StateComponent/StateFull'
import Stateless from './Example/StateComponent/StateLess'
import State from './Example/State/State'
import LemparProps from './Example/LemparFunctionProps/LemparProps.jsx'
import LifeCycle from './Example/LifeCycle/LifeCycle'
import connectbackend from './Example/ConnectBackEnd/ConnectBackEnd'
import NotFound from './Example/ReactRouter/NotFound'
import ReactRouter from './Example/ReactRouter/ReactRouter.jsx'
import Context from './Example/ManagementContext/Context'
import GlobalAPI from './Example/GlobalAPI/GlobalAPI'
import ReactHooks from './Example/ReactHooks/ReactHooks'
import DetailProduct from './Example/ConnectBackEnd/DetailProduct'
import Child from './Example/ManagementContext/Child'
import contextManagement from './Example/ManagementContext/Context/Context.js'

class App extends Component {
  render(){
    return (
        <Router>
          <Switch>
            <Route path="/" component={Home} exact/>
            <Route path="/props" component={Props} />
            <Route path="/statefull" component={Statefull} />
            <Route path="/stateless" component={Stateless} />
            <Route path="/state" component={State} />
            <Route path="/lemparprops" component={LemparProps} />
            <Route path="/lifecycle" component={LifeCycle} />
            <Route path="/connectbackend" component={connectbackend} />
            <Route path="/products/:id" component={DetailProduct} />
            <Route path="/router" component={ReactRouter} />
            <Route path="/context" component={Context} exact/>
            <Route path="/context/child" component={Child} />
            <Route path="/globalapi" component={GlobalAPI} />
            <Route path="/reacthooks" component={ReactHooks} />
            <Route component={NotFound} />
          </Switch>
        </Router>
    );
  }
}

export default contextManagement(App)