import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Login from './components/auth/login';
import Register from './components/auth/register';
import Forgot from './components/auth/forgot';
import Reset from './components/auth/reset';
import Activate from './components/auth/activation';
import Home from './components/home'
import Create from './components/create'
import Listurldata from './components/listurldata'
import { TokenProvider } from './TokenContext';


function App() {

  return (
  <>
<Router> 
  <Switch>
  <TokenProvider>
    <Route path='/' component={Register} exact ></Route>
    <Route path='/login' component={Login} exact ></Route>
    <Route path ='/forgot' component={Forgot} exact ></Route>
    <Route path = '/home' component={Home}></Route>
    <Route path="/activation/:token" component={Activate} exact ></Route>
    <Route path ='/reset/:randomString' component={Reset} exact ></Route>
    <Route path='/create' component={Create} exact ></Route>
    <Route path='/listurldata' component={Listurldata} exact ></Route>
  </TokenProvider>
  </Switch>
</Router>
  </>
  )
}

export default App;