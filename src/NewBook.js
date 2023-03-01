
import React, { useState } from "react";
import {useHistory } from "react-router-dom";

export default function NewBook({authorList}) {
  const [bookName, setBookName] = useState("");
  const [seriesName, setSeriesName] = useState("");
  const [isNewAuthor, setIsNewAuthor] = useState(false);
  const [newAuthorName, setNewAuthorName] = useState('');
  const [selectedAuthor, setSelectedAuthor] = useState();    // just author_id - if want to create a author need to have a option to create a author to create a author
  const [note, setNote] = useState("");
  const [readByMendel, setReadByMendel] = useState(false)
  const [readByShaina, setReadByShaina] = useState(false)
  let history = useHistory();
// add link to author name to go to author page with all the books and include all books for the author if add book to author you have to add state for books and authors

const bookData = {
    "name": bookName,
    "series": seriesName,
    "author_id": selectedAuthor,
    "notes": note,
    "read_by_mendel": readByMendel,
    "read_by_shaina": readByShaina,
  }
  
  function handleAuthorSelection(event){
    const selectedOption = event.target.value;
    if (selectedOption === 'create_new') {
      setIsNewAuthor(true);
    } else {
      setIsNewAuthor(false);
      const author = authorList.find((author) => author.name === event.target.value);
      setSelectedAuthor(author.id);
    }
  };

  const authorOptions = authorList.map((author) => (
    <option key={author.id} id={author.id} value={author.name}>
      {author.name}
    </option>
  ));

  function handleNewAuthorNameChange(event){
    setNewAuthorName(event.target.value);
  };

  
  function handleSubmit(){
    alert("I Have Been Submited")
    history.push("/Books");
    console.log(bookData)
  }

  return (
    <div>
      <h1>New Book Form</h1>
      <h2>Add a Book that is not on the list to this application</h2>
      <form onSubmit={handleSubmit}>
        <div class="ui form">
          <div class="required inline field">
            <label>Book name</label>
            <input type="text" onChange={e => setBookName(e.target.value)} placeholder="First Name"  value={bookName}/>
          </div>
          <div class="required inline field">
            <label>Series name</label>
            <input type="text" onChange={e => setSeriesName(e.target.value)} placeholder="Series Name"  value={seriesName}/>
          </div>
          <div class="required inline field">
            <label>
            Select Author:
            </label>
            <select class="ui dropdown" onChange={handleAuthorSelection}>
              <option value="">Select A Option</option>
              {authorOptions}
              <option value="create_new">Create a new author</option>
            </select>
          </div>
          {isNewAuthor && (
            <div class="required inline field">
              <label>New Author Name:</label>
              <input type="text" value={newAuthorName} onChange={handleNewAuthorNameChange} />
            </div>
          )}
          <div class="inline field">
            <label>Notes</label>
            <input type="text" onChange={e => setNote(e.target.value)} placeholder="Note"  value={note}/>
          </div>
          <div class="inline field">
            <div class="ui checkbox">
              <input type="checkbox" name="example" onChange={(e => setReadByMendel(readByMendel ? false : true))}/>
              <label>Read By Mendel</label>
            </div>
          </div>
          <div class="inline field">
            <div class="ui checkbox">
              <input type="checkbox" name="example" onChange={(e => setReadByShaina(readByShaina ? false : true))}/>
              <label>Read By Shaina</label>
            </div>
          </div>
          <button class="ui button" type="submit">Submit</button>
        </div>
      </form>
     
    </div>
  );
}
  


//