import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './Pages/Login'
import Home from './Pages/Home'
import Add from './Pages/Add'


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' >
          <Login />
        </Route>
        <Route  path='/home' >
          <Home />
        </Route>
        <Route  path='/add' >
          <Add />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
