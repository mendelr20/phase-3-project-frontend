import React, { useState } from "react";
import { useHistory } from "react-router-dom";

export default function NewBook({ authorList, addBook }) {
  const [bookName, setBookName] = useState("");
  const [seriesName, setSeriesName] = useState("");
  const [isNewAuthor, setIsNewAuthor] = useState(false);
  const [newAuthorName, setNewAuthorName] = useState("");
  const [selectedAuthor, setSelectedAuthor] = useState(); // just author_id - if want to create a author need to have a option to create a author
  const [note, setNote] = useState("");
  const [read, setRead] = useState(false);
  let history = useHistory();

  function handleAuthorSelection(event) {
    const selectedOption = event.target.value;
    if (selectedOption === "create_new") {
      setIsNewAuthor(true);
    } else {
      setIsNewAuthor(false);
      const author = authorList.find(
        (author) => author.name === event.target.value
      );
      setSelectedAuthor(author.id);
    }
  }

  const authorOptions = authorList.map((author) => (
    <option key={author.id} id={author.id} value={author.name}>
      {author.name}
    </option>
  ));

  function handleNewAuthorNameChange(event) {
    setNewAuthorName(event.target.value);
  }

  function createBookWithAuthorId(authorId) {
    return fetch("http://localhost:9292/books", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: bookName,
        series: seriesName,
        author_id: authorId,
        notes: note,
        read: read,
      }),
    }).then((response) => response.json());
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (isNewAuthor) {
      // Make a POST request to create a new author
      fetch("http://localhost:9292/authors", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name: newAuthorName }),
      })
        .then((response) => response.json())
        .then((data) => {
          setSelectedAuthor(data.id);
          return createBookWithAuthorId(data.id);
        })
        .then((data) => {
          addBook(data);
          history.push("/Books");
        });
    } else {
      createBookWithAuthorId(selectedAuthor)
        .then((data) => {
          addBook(data);
          history.push("/Books");
        });
    }
  }

  return (
    <div>
      <h1>New Book Form</h1>
      <h2>Add a Book that is not on the list to this application</h2>
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
          <div className="required inline field">
            <label>Select Author:</label>
            <select className="ui dropdown" onChange={handleAuthorSelection}>
              <option value="">Select A Option</option>
              {authorOptions}
              <option value="create_new">Create a new author</option>
            </select>
          </div>
          {isNewAuthor && (
            <div className="required inline field">
              <label>New Author Name:</label>
              <input
                type="text"
                value={newAuthorName}
                onChange={handleNewAuthorNameChange}
              />
            </div>
          )}
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
                type="checkbox"
                name="example"
                onChange={(e) => setRead(read ? false : true)}
              />
              <label>Read</label>
            </div>
          </div>
          <button className="ui button" type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

