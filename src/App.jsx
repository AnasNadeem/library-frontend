import React from 'react';
import './App.css';
import IndexPage from './Components/IndexPage';
import BookPage from './Components/BookPage';
import MainNavbar from './Components/MainNavbar';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <MainNavbar />
      <Switch>
        <Route exact path="/">
          <IndexPage />
        </Route>
        <Route path="/book">
          <BookPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;