import React, { useEffect, useState } from "react";
import {Route, Switch } from "react-router-dom";

import './App.css';
import Header from './Header';
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";
import Books from "./Books";
import NewBook from "./NewBook";
import Authors from "./Authors";

export default function App() {
  const [bookList, setBookList] = useState([])
  const [authorList, setAuthorList] = useState([])

  useEffect(()=>{
    fetch('http://localhost:9292/books')
    .then(res => res.json())
    .then(data => setBookList(data))
  },[])

  useEffect(()=>{
    fetch('http://localhost:9292/authors')
    .then(res => res.json())
    .then(data => setAuthorList(data))
  },[])
  
  function addBook(newBook){
    setBookList([...bookList, newBook])
  } 

  console.log("app", authorList)
  return (
    <div className="App">
      <Header />
      <NavBar />
        <Switch>
          <Route exact path="/About">
            <About />
          </Route>
          <Route exact path="/Books">
            <Books bookList={bookList}  authorList={authorList} addBook={addBook}/>
          </Route> 
          <Route exact path="/NewBook">
            <NewBook addBook={addBook}  authorList={authorList} />
          </Route>
          <Route exact path="/authors/:authorId">
            <Authors authorList={authorList}/>
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
    </div>
  );
}



