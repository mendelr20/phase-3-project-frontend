import React from 'react'

export default function BookListingCard({book}) {

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
            <div>Read by Mendel: {book.read_by_mendel ? <a>True</a> : <a>False</a>}
            </div>
            <div>
            Read by Shaina: {book.read_by_shaina ? <a>True</a> : <a>False</a>}
            </div>
          </div>
        </div>
    </div>
    
  )
}

