import { useState } from "react";
import { Data } from "../../constants";
import Heading from "../Heading/Heading.component";
import Task from "../Task/Task.component";
import { MdModeEdit } from "react-icons/md";
import { TbHttpDelete } from "react-icons/tb";

const Novels = () => {
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
    <div className="flex flex-wrap justify-center my-[1rem] gap-8">

      {/* <Heading /> */}
      {books.map((book) => {
        // console.log(book);
        if (book.class === "NOVELS") {
          return (
            <main
              className="bg-gradient-to-r from-red-400 to-blue-500 hover:from-teal-500 w-[30%] mb-[1rem] cursor-pointer mt-[1rem] "
              key={book.id}
            >
              <div className="">
                <div className="w-[70%] mx-auto py-[1rem] ">
                  <img src={book.imageUrl} alt={book.title} className="box-border h-50 w-50 object-cover h-[20rem] w-[20rem] mx-auto" />
                  {/* </div> */}
                  {/* <div className=""> */}
                  <span className=" text-[20px] font-[700] flex justify-center">
                    {book.title}
                  </span>
                  <br />
                  <span className="text-[20px] font-[700] flex justify-center">
                    <span className="text-[18px] font-[400] pr-[10px]">
                      Author:
                    </span>
                    {book.author}
                  </span>
                  {/* </div> */}
                  <div className=" cursor-pointer flex justify-center gap-8">
                    <MdModeEdit
                      className="text-[35px] text-green-500"
                      onClick={() => editOptionHandler(book.id)}
                    />
                    <TbHttpDelete
                      className="text-[35px] text-red-600"
                      onClick={() => deleteHandler(book.id)}
                    />
                  </div>
                </div>
              </div>
            </main>
          );
        }
      })}
      <Task
        isTaskOpen={isTaskOpen}
        setIsTaskOpen={setIsTaskOpen}
        isEditing={isEditing}
        editHandler={editHandler}
        deleteHandler={deleteHandler}
        bookEdit={bookEdit}
      />
    </div>
    </>
  );
};

export default Novels;
