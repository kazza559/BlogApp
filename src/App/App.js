import React from "react";
import "./App.css";
import Home from "../Home/index";
import Header from "../components/header/Header";
import Login from "../Login/Login";
import Register from "../Register/Register";
import { Router, Route, Switch } from "react-router-dom";
import { history } from "./../Helpers/history";
import EditArticle from "../Editor/EditArticle";
import Profile from "../Profile";

function App() {
  return (
    <Router history={history}>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/editor" component={EditArticle} />
          <Route exact path="/profile/:user" component={Profile} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
