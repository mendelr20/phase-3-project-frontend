
import React, { useState } from "react";
import {useHistory } from "react-router-dom";

export default function NewBook({authorList}) {
  const [bookName, setBookName] = useState("");
  const [seriesName, setSeriesName] = useState("");
  //set up state / post ot create author ...
  const [selectedAuthor, setSelectedAuthor] = useState('');

  const handleAuthorChange = (event) => {
    setSelectedAuthor(event.target.value);
  };


  
  const authorOptions = authorList.map((author) => (
    <option key={author.id} id={author.id} value={author.name}>
      {author.name}
    </option>
  ));
  return (
    <div>
      <h1>New Book Form</h1>
      <h2>Add a Book that is not on the list to this application</h2>
      <div class="ui form">
        <div>
          <div class="required inline field">
            <label>Book name</label>
            <input type="text" onChange={e => setBookName(e.target.value)} placeholder="First Name"  value={bookName}/>
          </div>
          <div class="required inline field">
            <label>Series name</label>
            <input type="text" onChange={e => setSeriesName(e.target.value)} placeholder="Series Name"  value={seriesName}/>
          </div>
          <div class="inline field">
            <label>Author name</label>
            <select
              id="author-dropdown"
              value={selectedAuthor}
              onChange={handleAuthorChange}
            >
              {authorOptions}
            </select>
            {/* <div class="ui selection dropdown">
              <input type="hidden" name="gender"/>
              <i class="dropdown icon"></i>
              <div class="default text">Author</div>
              <div class="menu">
                <div class="item" data-value="1">Male</div>
                <div class="item" data-value="0">Female</div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
  


