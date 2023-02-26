import React, {useState} from 'react'
import { NavLink } from "react-router-dom";

export default function BookListingCard({book}) {
  const [mendelCheckBox, setMendelChecked] = useState(book.read_by_mendel);
  const [shainaCheckBox, setShainaChecked] = useState(book.read_by_shaina);

  function handleMendelPatch(e){
    alert("You need to set up a patch request :)")
  }
  function handleShainaPatch(e){
    alert("i will patch you")
  }
  const handleMendelCheckboxChange = (event) => {
    setMendelChecked(event.target.checked);
    handleMendelPatch(mendelCheckBox)
  };

  const handleShainaCheckboxChange = (event) => {
    setShainaChecked(event.target.checked);
    handleShainaPatch(shainaCheckBox)
  };
  
  function handleDelete(){
    alert('hey there')
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


