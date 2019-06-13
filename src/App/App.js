import React from "react";
import "./App.css";
import Home from "../Home/index";
import Header from "../components/Header/Header";
import Login from "../Login/Login";
import Register from "../Register/Register";
import { Router, Route, Switch } from "react-router-dom";
import { history } from "./../Helpers/history";

function App() {
  return (
    <Router history={history}>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
