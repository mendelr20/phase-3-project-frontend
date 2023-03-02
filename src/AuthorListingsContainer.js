import React from 'react'
import AuthorBookListingCard from './AuthorBookListingCard'

export default function AuthorListingsContainer({authorIdList})  {

    console.log("author id list", authorIdList)

    
  return (
    <div className='ui cards'>
      <h1>
           {authorIdList.books.map((book) => <AuthorBookListingCard book={book} />)}
      </h1>
       
    </div>
  )
}

