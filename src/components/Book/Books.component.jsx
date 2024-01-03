import { useState } from "react";
import { MdModeEdit } from "react-icons/md";
import { TbHttpDelete } from "react-icons/tb";
import { Data } from "../../constants";

const Books = ({
  imageUrl,
  title,
  author,
  id,
  books,
  setBooks,
  editHandler,
  deleteHandler,
  updatedTitle,
  updatedAuthor,
  setIsTaskOpen,
  editOptionHandler
}) => {

const updateHandler = (id)=>{
  editHandler(id,updatedTitle,updatedAuthor)
  editOptionHandler(id)

}
const handleDelete = ()=>{
  deleteHandler(id)
}
  return (
    <main
      className=""
      key={id}
    >
      <div className="">
        <div className="">
          <img src={imageUrl} alt={title} />
        </div>
        <div className="">
          <span className=" text-[20px] font-[700]">{title}</span>
          <span className="text-[20px] font-[700]">{author}</span>
        </div>
      </div>
      <div className="">
        <MdModeEdit
          className="text-[35px] text-green-500"
          onClick={()=> updateHandler(id)}
        />
        <TbHttpDelete
          className="text-[35px] text-red-600"
          onClick={handleDelete}
        />
      </div>
    </main>
  );
};

export default Books;
