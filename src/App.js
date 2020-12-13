import './App.css';
import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import {Switch, Route, Redirect} from "react-router-dom";
import Footer from './Footer';
import Login from './Login';
import Help from './Help';
import Cart from './Cart';
import Services from './Services';
import NavBar from './NavBar';
const App = () => {
  return (
    <>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/About" component={About} />
        <Route exact path="/Contact" component={Contact} />
        <Route exact path="/Login" component={Login} />
        <Route exact path="/Help" component={Help} />
        <Route exact path="/Cart" component={Cart} />
        <Route exact path="/Services" component={Services} />
        <Redirect to="/" />
      </Switch>
      <Footer />
    </>
  )
}

export default App;
