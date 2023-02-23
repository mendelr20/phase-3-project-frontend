import React from "react";
import BookListingsContainer from "./BookListingsContainer";

export default function Books({bookList}){

    
    return (
        <div>
            <BookListingsContainer bookList={bookList}/>
        </div>
    )
}