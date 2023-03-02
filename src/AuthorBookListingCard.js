import React from "react";

export default function AuthorBookListingCard({ book }) {

  return (
    <div>
      <div class="ui card" key={book.id}>
        <div class="content">
          <a class="header">{book.name}</a>
          <div class="description">Series: {book.series}</div>
        </div>
      </div>
    </div>
  )
}
