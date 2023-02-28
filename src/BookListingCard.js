import React, {useState} from 'react'
import { NavLink } from "react-router-dom";

export default function BookListingCard({book, deleteCallback}) {
  console.log("reading state", book.read_by_mendel)
  const [mendelCheckBox, setMendelChecked] = useState(book.read_by_mendel);
  const [shainaCheckBox, setShainaChecked] = useState(book.read_by_shaina);

  console.log("inital state",mendelCheckBox)

  function handlePatch(){
    console.log("before patch", book.read_by_mendel)
    fetch(`http://localhost:9292/books/${book.id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      "read_by_mendel": mendelCheckBox,
      "read_by_shaina": shainaCheckBox
    })
  })
  .then(res => res.json())
  .then(updatedBook => console.log(updatedBook))
  .catch(error => {
    console.error('Error updating book:', error);
  });
  }

  function handleMendelCheckboxChange(event){
    console.log("before", book.read_by_mendel)
    setMendelChecked(event.target.checked, handlePatch);
    console.log("after", book.read_by_mendel)
   
  };

  console.log(book.read_by_mendel)
  console.log(book)

  function handleShainaCheckboxChange(event){
    console.log("before shaina", book.read_by_shaina)
    setShainaChecked(event.target.checked, handlePatch);
    console.log("after shaina", book.read_by_shaina)
  };
  
  function handleDelete(){
    deleteCallback(book.id)
  }
  
  return (
    <div>
        <div class="ui card" key={book.id}>
          <div class="content">
            <a class="header">{book.name}</a>
            <div class="description">
              Series: {book.series}
            </div>
              Author: <NavLink to={`/authors/${book.author.id}`}>{book.author.name}</NavLink>
            <div>
            Notes: {book.notes}
            </div>
            <div>
              Read by Mendel:  <input type="checkbox" checked={mendelCheckBox} onChange={handleMendelCheckboxChange} />
            </div>
            <div>
            Read by Shaina: <input type="checkbox" checked={shainaCheckBox} onChange={handleShainaCheckboxChange}/>
            </div>
          </div>
          <button onClick={handleDelete} class="ui icon button">
            <i class="trash icon"></i>
          </button>
        </div>
    </div> 
  )
}


