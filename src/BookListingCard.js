import React, {useState} from 'react'

export default function BookListingCard({book}) {
  const [mendelCheckBox, setMendelChecked] = useState(book.read_by_mendel);
  const [shainaCheckBox, setShainaChecked] = useState(book.read_by_shaina);
  // patch request
  // console.log("console", mendelCheckBox)
  function handleMendelPatch(e){
    console.log("handlem", e)
  }
  function handleShainaPatch(e){
    console.log("handles", e)
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
            Author: {book.author.name}
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
          <button onClick={handleDelete} class="right floated ">Delete</button>
        </div>
    </div>
    
  )
}

