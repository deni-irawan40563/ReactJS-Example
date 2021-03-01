import { BrowserRouter, Route} from 'react-router-dom'
import Props from './Example/Props/Props.jsx'
import Home from './Example/Home.jsx'
import Statefull from './Example/StateComponent/StateFull'
import Stateless from './Example/StateComponent/StateLess'
import State from './Example/State/State'
import LemparProps from './Example/LemparFunctionProps/LemparProps.jsx'
import LifeCycle from './Example/LifeCycle/LifeCycle'

function App() {
  return (
    <BrowserRouter>
      <Route path="/" component={Home} exact/>
      <Route path="/props" component={Props} />
      <Route path="/statefull" component={Statefull} />
      <Route path="/stateless" component={Stateless} />
      <Route path="/state" component={State} />
      <Route path="/lemparprops" component={LemparProps} />
      <Route path="/lifecycle" component={LifeCycle} />
    </BrowserRouter>
  );
}

export default App;
