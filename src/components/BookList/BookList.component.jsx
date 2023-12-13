import { useState } from "react";
import { Data } from "../../constants";
import Books from "../Book/Books.component";
import Heading from "../Heading/Heading.component";

const BookList = () => {
  const [books, setBooks] = useState(Data);
  
  return (
    <>
      <Heading />
      {books.map((book) => {
        console.log(book);
        return (
          <Books
            key={book.id}
            id={book.id}
            books = {books}
            setBooks={setBooks}
            imageUrl={book.imageUrl}
            title={book.title}
            author={book.author}
          />
        );
      })}
    </>
  );
};

export default BookList;
