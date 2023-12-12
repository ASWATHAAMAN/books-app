import { Data } from "../../constants";
import Books from "../Book/Books.component";

const BookList = ({ imageUrl, title, author }) => {
  return (
    <>
      {Data.map((book) => {
        return (
          <Books
            key={book.id}
            imageUrl={imageUrl}
            title={title}
            author={author}
          />
        );
      })}
    </>
  );
};

export default BookList;
