import { useState } from "react";
import { Data } from "../../constants";
import Books from "../Book/Books.component";
import Heading from "../Heading/Heading.component";
import Task from "../Task/Task.component";

const BookList = () => {
  const [books, setBooks] = useState(Data);
  const [isTaskOpen, setIsTaskOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [bookEdit, setIsBookEdit] = useState("");

  const editOptionHandler = (id) => {
    setIsTaskOpen(true);
    books.map((book) => {
      if (book.id === id) {
        setIsBookEdit(book);
      }
    });
  };

  const editHandler = (id, updatedTitle, updatedAuthor) => {
    const updatedBook = books.map((book) => {
      if (book.id === id) {
        return { ...book, title: updatedTitle, author: updatedAuthor };
      }
      return book;
    });
    setBooks(updatedBook);
  };

  const deleteHandler = (id) => {
    const remainBook = books.filter((book) => book.id !== id);
    setBooks(remainBook);
    // console.log(remainBook);
  };

  return (
    <>
      <Heading />
      {books.map((book) => {
        // console.log(book);
        return (
          <Books
            key={book.id}
            id={book.id}
            books={books}
            setBooks={setBooks}
            imageUrl={book.imageUrl}
            title={book.title}
            author={book.author}
            editHandler={editHandler}
            deleteHandler={deleteHandler}
            editOptionHandler={editOptionHandler}
          />
        );
      })}
      <Task
        isTaskOpen={isTaskOpen}
        setIsTaskOpen={setIsTaskOpen}
        isEditing={isEditing}
        editHandler={editHandler}
        deleteHandler={deleteHandler}
        bookEdit={bookEdit}
      />
    </>
  );
};

export default BookList;
