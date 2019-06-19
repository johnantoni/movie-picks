import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Recursion from "./components/Recursion";

import './App.scss';

function Header() {
  return (
    <ul className="menu">
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/recursion">Recursion</Link>
      </li>
    </ul>
  )
}

function App() {
  return (
    <Router>
      <div>
        <Header />
        
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/recursion" component={Recursion} />
      </div>
    </Router>
  );
}

export default App;
