import React from "react";
import { useParams } from "react-router-dom";
import AuthorListingsContainer from "./AuthorListingsContainer";

export default function Authors({ onAuthorIdChange, authorIdList}) {
  const { authorId } = useParams();

  React.useEffect(() => {
    onAuthorIdChange(Number(authorId));
  }, [authorId, onAuthorIdChange]);

  return (
    <div>
      <h2>Authors Books</h2>
      <AuthorListingsContainer authorIdList={authorIdList}/>
    </div>
  );
}
