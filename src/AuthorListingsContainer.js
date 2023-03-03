import React from "react";
import AuthorBookListingCard from "./AuthorBookListingCard";

export default function AuthorListingsContainer({ authorIdList }) {
  return (
    <div class="ui relaxed divided list">
      <ol>
        {authorIdList?.books?.map((book) => (
          <AuthorBookListingCard book={book} />
        ))}
      </ol>
    </div>
  );
}
