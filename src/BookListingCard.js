import React from "react";
import { NavLink } from "react-router-dom";

export default function BookListingCard({
  book,
  deleteCallback,
  handleEditClick,
}) {
  function handleDelete() {
    deleteCallback(book.id);
  }

  function handleEdit() {
    handleEditClick(book);
  }

  return (
    <div>
      <div className="ui card" key={book.id}>
        <div className="content">
          <h1 className="header">{book.name}</h1>
          <div className="description">Series: {book.series}</div>
          Author:{" "}
          <NavLink to={`/authors/${book.author.id}`}>
            {book.author.name}
          </NavLink>
          <div>Notes: {book.notes}</div>
        </div>
        <div>
          <button onClick={handleDelete} className="ui icon button">
            <i className="trash icon"></i>
          </button>
          <button onClick={handleEdit} className="ui icon button">
            <i className="edit icon"></i>
          </button>
        </div>
      </div>
    </div>
  );
}
