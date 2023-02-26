import React from 'react';
import { useParams } from 'react-router-dom';
import BookListingsContainer from './BookListingsContainer';
export default function Authors({authorList}) {
    const { authorId } = useParams();

    const matchingAuthor = authorList.find(author => author.id === Number(authorId))
    const bookList = matchingAuthor.books

    console.log(bookList)
    return (
        <div>
        <h1>Authors Books</h1>
        <BookListingsContainer / >
        </div>
    );
}