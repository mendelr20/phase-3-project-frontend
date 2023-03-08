import React from "react";
import { NavLink } from "react-router-dom";
import BookListingsContainer from "./BookListingsContainer";

export default function Books({ bookList, deleteCallback, updateCallback, updateBookCallback }) {
  return (
    <div>
      <button className="ui basic button">
        <i className="add icon"></i>
        <i className="book icon"></i>
        <NavLink to="/NewBook">New Book</NavLink>
      </button>
      <p></p>
      <BookListingsContainer
        bookList={bookList}
        deleteCallback={deleteCallback}
        updateCallback={updateCallback}
        updateBookCallback={updateBookCallback}
      />
    </div>
  );
}
