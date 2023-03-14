import React, { useState } from "react";
import BookListingCard from "./BookListingCard";

export default function BookListingsContainer({ bookList, deleteCallback, updateCallback}) {
  const [isEditing, setIsEditing] = useState(false);
  const [bookName, setBookName] = useState("");
  const [seriesName, setSeriesName] = useState("");
  const [note, setNote] = useState("");
  const [read, setRead] = useState(false);
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
        book: {
          name: bookName,
          series: seriesName,
          notes: note,
          read: read,
        }
      }),
    })
      .then((r) => r.json())
      .then((updatedBook) => {
        updateCallback(updatedBook);
        setIsEditing(false)
      });
  }

  function handleEditClick(book) {
    setBookName(book.name);
    setSeriesName(book.series);
    setRead(book.read);
    setNote(book.notes);
    setIsEditing(true);
    setBookId(book.id);
  }

  function handleCancelClick() {
    setIsEditing(false);
  }

  return (
    <div>
      {isEditing ? (
        <form onSubmit={handleSubmit}>
          <div className="ui form">
            <div className="required inline field">
              <label>Book name</label>
              <input
                type="text"
                onChange={(e) => setBookName(e.target.value)}
                placeholder="First Name"
                value={bookName}
              />
            </div>
            <div className="inline field">
              <label>Series name</label>
              <input
                type="text"
                onChange={(e) => setSeriesName(e.target.value)}
                placeholder="Series Name"
                value={seriesName}
              />
            </div>
            <div className="inline field">
              <label>Notes</label>
              <input
                type="text"
                onChange={(e) => setNote(e.target.value)}
                placeholder="Note"
                value={note}
              />
            </div>
            <div className="inline field">
              <div className="ui checkbox">
                <input
                  checked={read}
                  type="checkbox"
                  name="example"
                  onChange={(e) => setRead( read ? false : true)}
                />
                <label>Read</label>
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
              key={book.id}
              book={book}
              deleteCallback={deleteCallback}
              handleEditClick={handleEditClick}
            />
          ))}
        </div>
      )}
    </div>
  );
}
