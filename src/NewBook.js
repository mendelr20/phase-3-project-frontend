
import React, { useState } from "react";
import {useHistory } from "react-router-dom";
import { Checkbox } from "semantic-ui-react";

export default function NewBook({authorList}) {
  const [bookName, setBookName] = useState("");
  const [seriesName, setSeriesName] = useState("");
  //set up state / post ot create author ...
  const [selectedAuthor, setSelectedAuthor] = useState({ id: '', name: '' });
  const [note, setNote] = useState("");
  const [readByMendel, setReadByMendel] = useState(false)
  const [readByShaina, setReadByShaina] = useState(false)
  let history = useHistory();

  const handleAuthorChange = (event) => {
    const author = authorList.find((author) => author.name === event.target.value);
    setSelectedAuthor({ id: author.id, name: author.name });
  };

  const authorOptions = authorList.map((author) => (
    <option key={author.id} id={author.id} value={author.name}>
      {author.name}
    </option>
  ));
  
  function handleSubmit(e){
    alert("I Have Been Submited")
    history.push("/Books");
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
            <label>Author</label>
            <select class="ui dropdown" onChange={handleAuthorChange}>
              <option value="">Select A Option</option>
              {authorOptions}
            </select>
          </div>
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