import React, { useState, useCallback, useEffect } from "react";
import { useParams } from "react-router-dom";
import AuthorListingsContainer from "./AuthorListingsContainer";

export default function Authors({ authorList }) {
  const { authorId } = useParams();
  const [authorIdList, setAuthorIdList] = useState([]);

  const onAuthorIdChange = useCallback(
    (id) => {
      const authorIdList = authorList.find((author) => author.id === id);
      setAuthorIdList(authorIdList);
    },
    [authorList]
  );

  useEffect(() => {
    onAuthorIdChange(Number(authorId));
  }, [authorId, onAuthorIdChange]);

  return (
    <div>
      <h2>Authors Books</h2>
      <AuthorListingsContainer authorIdList={authorIdList} />
    </div>
  );
}
