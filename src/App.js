import React, { useEffect, useState } from "react";
import {Route, Switch } from "react-router-dom";

import './App.css';
import Header from './Header';
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";
import Books from "./Books";

export default function App() {
  const [bookList, setBookList] = useState([])

  useEffect(()=>{
    fetch('http://localhost:9292/books')
    .then(res => res.json())
    .then(data => setBookList(data))
  },[])
  
  return (
    <div className="App">
      <Header />
      <NavBar />
        <Switch>
          <Route exact path="/About">
            <About />
          </Route>
          <Route exact path="/Books">
            <Books bookList={bookList} />
          </Route> 
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
    </div>
  );
}



