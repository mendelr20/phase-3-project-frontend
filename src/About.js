import React from "react";

export default function About() {
  return (
    <div>
      <h1>
        <i class="info circle icon"></i>
        About
      </h1>
      <h2>
        <div class="ui floating message">
          I am thrilled to introduce my phase 3 web application, designed as a
          tribute to my beloved wife Shaina, who has a penchant for reading and
          being organized. This app has been specifically created to keep track
          of books, movies, and TV shows that we plan to read and watch, as well
          as the ones we have already enjoyed. At present, the application can
          only manage books, but we plan to incorporate movies and TV shows in
          the future. The app showcases a comprehensive list of all the books
          that we have entered into the system. Clicking on an author's name
          displays a page that lists all the books written by that author.
          Moreover, the books page provides a button that allows users to create
          a new book, which includes fields for the title, series name (if
          applicable), an author selection from a list, or the option to add a
          new author, notes, and a checkbox that indicates if the book has been
          read by Mendel or Shaina.
        </div>
      </h2>
    </div>
  );
}
