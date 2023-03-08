import React, { useState } from "react";
import { NavLink } from "react-router-dom";

export default function BookListingCard({
  book,
  deleteCallback,
  handleEditClick,
  updateBookCallback,
}) {
  const [mendelCheckBox, setMendelChecked] = useState(book.read_by_mendel);
  const [shainaCheckBox, setShainaChecked] = useState(book.read_by_shaina);

  function handleMendelCheckboxChange(event) {
    const newCheckedState = event.target.checked;
    setMendelChecked(newCheckedState);
    setShainaChecked(shainaCheckBox);
    fetch(`http://localhost:9292/books/${book.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: book.name,
        series: book.series,
        notes: book.notes,
        read_by_mendel: newCheckedState,
        read_by_shaina: shainaCheckBox,
      }),
    })
      .then((r) => r.json())
      .then((updatedBook) => {
        updateBookCallback(updatedBook);
      });
  }

  function handleShainaCheckboxChange(event) {
    const newCheckedState = event.target.checked;
    setShainaChecked(newCheckedState); // update shainaCheckBox state

    fetch(`http://localhost:9292/books/${book.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: book.name,
        series: book.series,
        notes: book.notes,
        read_by_mendel: mendelCheckBox,
        read_by_shaina: newCheckedState,
      }),
    })
      .then((r) => r.json())
      .then((updatedBook) => {
        updateBookCallback(updatedBook);
      });
  }

  function handleDelete() {
    deleteCallback(book.id);
  }

  function handleEdit() {
    handleEditClick(book);
  }

  return (
    <div>
      <div class="ui card" key={book.id}>
        <div class="content">
          <a class="header">{book.name}</a>
          <div class="description">Series: {book.series}</div>
          Author:{" "}
          {/* <NavLink to={`/authors/${book.author.id}`}>
            {book.author.name}
          </NavLink> */}
          <div>Notes: {book.notes}</div>
          <div>
            Read by Mendel:{" "}
            <input
              type="checkbox"
              checked={mendelCheckBox}
              onChange={handleMendelCheckboxChange}
            />
          </div>
          <div>
            Read by Shaina:{" "}
            <input
              type="checkbox"
              checked={shainaCheckBox}
              onChange={handleShainaCheckboxChange}
            />
          </div>
        </div>
        <div>
          <button onClick={handleDelete} class="ui icon button">
            <i class="trash icon"></i>
          </button>
          <button onClick={handleEdit} class="ui icon button">
            <i class="edit icon"></i>
          </button>
        </div>
      </div>
    </div>
  );
}
