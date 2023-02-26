import React from "react";
import { NavLink } from "react-router-dom";
import BookListingsContainer from "./BookListingsContainer";

export default function Books({bookList}){

    return (
        <div>
            <button class="ui basic button">
                <i class="add icon"></i>
                <i class="book icon"></i>
                <NavLink to="/NewBook">New Book</NavLink>
            </button>
            <p></p>
            <BookListingsContainer bookList={bookList}/ >
        </div>
    )
}