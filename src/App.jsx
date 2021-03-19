import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
//import NavBar from './views/NavBar';
import Beers from './views/Beers';
import SingleBeer from './views/SingleBeer';
import RandomBeer from './views/RandomBeer';
import NewBeer from './views/NewBeer';
import HomePage from './views/HomePage';
import Hangover from './views/Hangover';
import './App.scss';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" component={HomePage} exact></Route>
          <Route path="/beers" component={Beers} exact></Route>
          <Route path="/beers/:id" component={SingleBeer} exact></Route>
          <Route path="/random-beer" component={RandomBeer} exact></Route>
          <Route path="/new-beer" component={NewBeer} exact></Route>
          <Route path="/error" component={Hangover} exact></Route>
          <Redirect to="/error"></Redirect>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
