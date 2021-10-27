import React from "react";
import MainNavbar from "./MainNavbar";
import BookLibrary from "./Book/BookLibrary";

function BookPage(){
  return(
    <>
      <MainNavbar />
      <BookLibrary />
    </>
  );
}

export default BookPage;