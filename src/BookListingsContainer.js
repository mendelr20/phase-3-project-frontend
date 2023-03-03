import React from "react";
import BookListingCard from "./BookListingCard";

export default function BookListingsContainer({ bookList, deleteCallback }) {
  return (
    <div cclass="ui relaxed divided list">
      {bookList.map((book) => (
        <BookListingCard book={book} deleteCallback={deleteCallback} />
      ))}
    </div>
  );
}
