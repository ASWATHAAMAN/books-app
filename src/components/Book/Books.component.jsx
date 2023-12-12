import { useState } from "react";
import { MdModeEdit } from "react-icons/md";
import { TbHttpDelete } from "react-icons/tb";
import { Data } from "../../constants";

const Books = ({imageUrl,title,author,id}) => {
  const [books,setBooks] = useState(Data)
  const [isediting,setIsEditing] = useState(false)

const editHandler = ()=>{
  
}

const deleteHandler = (id)=>{
const remainBook = books.filter((book)=> book.id !== id)
setBooks(remainBook)
}

  return (
    <main key={id}>
      <div>
        <div>
          <img src={imageUrl} alt={title} />
        </div>
        <div>
          <span>{title}</span>
          <span>{author}</span>
        </div>
      </div>
      <div>
        <MdModeEdit onClick={editHandler} />
        <TbHttpDelete onClick={deleteHandler} />
      </div>
    </main>
  );
};

export default Books;
