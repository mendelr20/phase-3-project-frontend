import React from "react";
import BookListingCard from "./BookListingCard";

export default function BookListingsContainer({ bookList, deleteCallback }) {
  return (
    <div className="ui cards">
      {bookList.map((book) => (
        <BookListingCard book={book} deleteCallback={deleteCallback} />
      ))}
    </div>
  );
}
