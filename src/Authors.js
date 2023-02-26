import React from 'react';
import { useParams } from 'react-router-dom';

export default function Authors({authorList}) {
    const { authorId } = useParams();

    const matchingAuthor = authorList.find(author => author.id === Number(authorId))
    console.log(matchingAuthor.books)
    return (
        <div>
        <h>Authors Books</h>
        <p>matching</p>
        </div>
    );
}