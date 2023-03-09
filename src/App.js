import {Route, Switch, BrowserRouter} from 'react-router-dom'
import LoginForm from './components/LoginForm'
// import Header from './components/Header'
import Home from './components/Home'
import NotFound from './components/NotFound'

const App = () => (
  <BrowserRouter>
    {/* <Header /> */}
    <Switch>
      <Route exact path="/login" component={LoginForm} />
      <Route exact path="/" component={Home} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
)

export default App
