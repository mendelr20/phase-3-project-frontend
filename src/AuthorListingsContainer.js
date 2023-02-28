import React from 'react'
import AuthorBookListingCard from './AuthorBookListingCard'

export default function AuthorListingsContainer({authorIdList})  {

 let matchingAuthor = authorIdList.books
  console.log("matching author", matchingAuthor)
  //need to get the map working again and not slow and only working sometimes

  return (
    <div className='ui cards'>
        {/* {matchingAuthor.map((book) => <AuthorBookListingCard book={book} />)} */}
    </div>
  )
}

