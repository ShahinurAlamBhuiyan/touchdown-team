import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './components/Home/Home';
import NotMatch from './components/NotMatched/NotMatch';
import TeamDetails from './components/TeamDetails/TeamDetails';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className='App'>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/team/:idTeam">
            <TeamDetails />
          </Route>
          <Route path="*">
            <NotMatch />
          </Route>
        </Switch>
        <Footer />
      </Router >
    </div >
  );
}

export default App;
