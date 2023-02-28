import React, {useEffect} from 'react';
import { useParams } from 'react-router-dom';
import AuthorListingsContainer from './AuthorListingsContainer';

export default function Authors({onAuthorIdChange, authorIdList}) {
    let { authorId } = useParams();
    
    let newAuthorId = authorId
    console.log("Author Id from params", Number(authorId))

  useEffect(() => {
        onAuthorIdChange(Number(newAuthorId));
      },[newAuthorId, onAuthorIdChange]);
    
    return (
        <div>
        <h2>Authors Books</h2>
        <AuthorListingsContainer authorIdList={authorIdList}/>
        </div>
    );
}
