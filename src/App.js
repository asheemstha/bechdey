import React, { Component } from "react";
import "./App.css";
import Header from "./components/header-component/header";
import Homepage from "./pages/homepage/homepage";
import AboutPage from "./pages/about-page/about-page";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Switch>
            <Route path="/" exact component={Homepage} />
            <Route path="/about" component={AboutPage} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
