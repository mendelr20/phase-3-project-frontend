import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";

import "./App.css";
import Header from "./Header";
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";
import Books from "./Books";
import NewBook from "./NewBook";
import Authors from "./Authors";

export default function App() {
  const [bookList, setBookList] = useState([]);
  const [authorList, setAuthorList] = useState([]);

  useEffect(() => {
    fetch("http://localhost:9292/books")
      .then((res) => res.json())
      .then((data) => setBookList(data));
  }, []);

  useEffect(() => {
    fetch(`http://localhost:9292/authors`)
      .then((res) => res.json())
      .then((data) => setAuthorList(data));
  }, []);

  function addBook(book) {
    // Check if the author of the book already exists in the authorList
    const existingAuthor = authorList.find(
      (author) => author.id === book.author_id
    );
    
    setBookList([...bookList, book]);
  
    if (existingAuthor) {
      // Add the book to the existing author's books array
      const updatedAuthorList = authorList.map((author) => {
        if (author.id === book.author_id) {
          return {
            ...author,
            books: [...author.books, book],
          };
        }
        return author;
      });
  
      // Update the authorList state
      setAuthorList(updatedAuthorList);
    } else {
      // Add the new author to the authorList with the newly created book
      const newAuthor = {
        id: book.author_id,
        name: book.author.name,
        books: [book],
      };
  
      const updatedAuthorList = [...authorList, newAuthor];
  
      // Update the authorList state
      setAuthorList(updatedAuthorList);
    }
  }
  
  function deleteCallback(id) {
    fetch(`http://localhost:9292/books/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        const filteredBooks = bookList.filter((book) => book.id !== id);
        setBookList(filteredBooks);
      });
  }

  function handleUpdateBook(updatedBook) {
    setBookList((bookList) =>
      bookList.map((book) => (book.id === updatedBook.id ? updatedBook : book))
    );
  }

  return (
    <div className="App">
      <Header />
      <NavBar />
      <Switch>
        <Route exact path="/About">
          <About />
        </Route>
        <Route exact path="/Books">
          <Books bookList={bookList} deleteCallback={deleteCallback} updateCallback={handleUpdateBook} />
        </Route>
        <Route exact path="/NewBook">
          <NewBook addBook={addBook} authorList={authorList} />
        </Route>
        <Route exact path="/authors/:authorId">
          <Authors
            authorList={authorList}
          />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}
