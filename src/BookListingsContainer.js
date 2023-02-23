import React from 'react'
import BookListingCard from './BookListingCard'

export default function BookListingsContainer({bookList})  {

  
  return (
    <div className='ui cards'>
        {bookList.map((book) => <BookListingCard book={book} />)}
    </div>
  )
}

