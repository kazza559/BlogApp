import React from "react";
import "./App.css";
import Home from "../Home/index";
import Header from "../components/Header/Header";
import Login from "../Login/Login";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Route path="/" exact component={Home} />
        <Route path="/signin" component={Login} />
        <Route path="/register" component={Login} />
      </div>
    </Router>
  );
}

export default App;
