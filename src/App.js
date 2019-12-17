import ReactDom from 'react-dom';

import React from 'react';
import { Switch, Route } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faCoffee, faCheckSquare, faAngry, faHome, faCartPlus, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Navbar from "./Components/Navbar";
import ProductList from './Components/ProductList';
import Default from "./Components/Default";
import Details from "./Components/Details";
import Cart from "./Components/Cart";
import Modal from "./Components/Modal";

library.add(fab, faAngry, faCheckSquare, faCoffee, faHome, faTrash, faCartPlus);

function App() {
  return (
    <React.Fragment>
      <Navbar/>
      <Switch>
        <Route exact path="/" component = {ProductList}></Route>
        <Route path="/Cart" component = {Cart}></Route>
        <Route path="/Details" component = {Details}></Route>
        <Route  component = {Default}></Route>
      </Switch>
      <Modal />
    </React.Fragment>

  );
}

export default App;
