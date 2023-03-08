import React, { useState } from "react";
import BookListingCard from "./BookListingCard";

export default function BookListingsContainer({ bookList, deleteCallback, updateCallback, updateBookCallback }) {
  const [isEditing, setIsEditing] = useState(false);
  const [bookName, setBookName] = useState("");
  const [seriesName, setSeriesName] = useState("");
  const [note, setNote] = useState("");
  const [readByMendel, setReadByMendel] = useState(false);
  const [readByShaina, setReadByShaina] = useState(false);
  const [bookId, setBookId] = useState(0);
  
  function handleSubmit(e) {
    e.preventDefault();
    console.log(bookId);
    fetch(`http://localhost:9292/books/${bookId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: bookName,
        series: seriesName,
        notes: note,
        read_by_mendel: readByMendel,
        read_by_shaina: readByShaina,
      }),
    })
      .then((r) => r.json())
      .then((updatedBook) => {
        updateCallback(updatedBook);
        setIsEditing(false)
      });
  }

  function handleEditClick(book) {
    console.log(book)
    setBookName(book.name);
    setSeriesName(book.series);
    setReadByMendel(book.read_by_mendel);
    setReadByShaina(book.read_by_shaina);
    setNote(book.notes);
    setIsEditing(true);
    setBookId(book.id);
    console.log(readByMendel)
  }

  function handleCancelClick() {
    setIsEditing(false);
  }

  return (
    <div>
      {isEditing ? (
        <form onSubmit={handleSubmit}>
          <div class="ui form">
            <div class="required inline field">
              <label>Book name</label>
              <input
                type="text"
                onChange={(e) => setBookName(e.target.value)}
                placeholder="First Name"
                value={bookName}
              />
            </div>
            <div class="inline field">
              <label>Series name</label>
              <input
                type="text"
                onChange={(e) => setSeriesName(e.target.value)}
                placeholder="Series Name"
                value={seriesName}
              />
            </div>
            <div class="inline field">
              <label>Notes</label>
              <input
                type="text"
                onChange={(e) => setNote(e.target.value)}
                placeholder="Note"
                value={note}
              />
            </div>
            <div class="inline field">
              <div class="ui checkbox">
                <input
                  checked={readByMendel}
                  type="checkbox"
                  name="example"
                  onChange={(e) => setReadByMendel(readByMendel ? false : true)}
                />
                <label>Read By Mendel</label>
              </div>
            </div>
            <div class="inline field">
              <div class="ui checkbox">
                <input
                  checked={readByShaina}
                  type="checkbox"
                  name="example"
                  onChange={(e) => setReadByShaina(readByShaina ? false : true)}
                />
                <label>Read By Shaina</label>
              </div>
            </div>
            <button type="submit">Save</button>
            <button onClick={handleCancelClick}>Cancel</button>
          </div>
        </form>
      ) : (
        <div className="ui cards">
          {bookList.map((book) => (
            <BookListingCard
              book={book}
              deleteCallback={deleteCallback}
              handleEditClick={handleEditClick}
              updateBookCallback={updateBookCallback}
            />
          ))}
        </div>
      )}
    </div>
  );
}
