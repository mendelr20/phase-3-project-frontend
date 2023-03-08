import React from "react";

export default function AuthorBookListingCard({ book }) {
  return (
    <div>
      <div class="item ">
        <i class="large book middle aligned icon"></i>
        <div class="content">
          <h1 class="header">{book.name}</h1>
          <div class="description">{book.series}</div>
          <div class="description">Notes: {book.notes}</div>
        </div>
      </div>
      <p/>
      <p/>
    </div>
  );
}
