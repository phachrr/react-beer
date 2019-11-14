import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./Home";
import Search from './Search'
import Index from "./index";
import Fave from "./Fave";

class App extends Component {
  render() {
    return (
      <div className="App" >
        <Router>
          <Route path="/" component={Index} />
          <Route exact path="/all" component={Home} />
          <Route exact path="/search/:query" component={Search} />
          {/* <Route exact path="/search/:query" component={Home} /> */}
          {/* <Route exact path="/fave" component={Fave} /> */}
          {/* <Route path="/contactus" component={ContactUs} /> */}
        </Router>

        <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Raleway" />
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous"></link>
      </div >
    );

  }
}

export default App;

/*

/*
       <div className=="w3-top">
            <div className=="w3-bar w3-white w3-card" id="myNavbar">
              <a href="#home" className=="w3-bar-item w3-button w3-wide">PUNK IPA brewry</a>

              <div className=="w3-right w3-hide-small">
                <a href="#about" className=="w3-bar-item w3-button">SORT</a>
                <a href="#team" className=="w3-bar-item w3-button"><i className=="fa fa-user"></i> CATEGORY</a>
              </div>
            </div>
          </div>
          */



