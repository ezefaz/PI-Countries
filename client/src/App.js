import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './components/Home/Home'
import LandingPage from './components/LandingPage/LandingPage'
import Detail from './components/Detail/Detail'
import ActivitiesList from './components/ActivitiesList/ActivitiesList'
import ActivityCreate from './components/ActivityCreate/ActivityCreate'

function App() {
  return ( 
    <BrowserRouter> 
      <div className="App"> 
        <Switch> 
          <Route exact path = '/' component = {LandingPage} />
          <Route path ='/home' component = {Home} />
          <Route path ='/activity' component = {ActivityCreate} />
          <Route path = '/activities' component = {ActivitiesList} />
          <Route path = '/detail/:id' component = {Detail} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;