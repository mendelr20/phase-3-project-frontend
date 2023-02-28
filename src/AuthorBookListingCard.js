import React from "react";

export default function AuthorBookListingCard({book}){
    console.log("Author Book Card", book)
    return(
        <div>
            <div>
                {book.name}, 
            </div>
        </div>
    )
}