import React from "react";

export default function AuthorBookListingCard({ book }) {
  
  return (
    <div>
      <div className="item">
        <i className="large book middle aligned icon"></i>
        <div className="content">
          <h1 className="header">{book.name}</h1>
          <div className="description">Series: {book.series}</div>
          <div className="description">Notes: {book.notes}</div>
        </div>
      </div>
      <p/>
      <p/>
    </div>
  );
}
