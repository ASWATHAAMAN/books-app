import { useState } from "react";
import { FaRegWindowClose } from "react-icons/fa";

const Task = ({ isTaskOpen,setIsTaskOpen}) => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const closeHandler = ()=>{
setIsTaskOpen(false)
  }

  return (
    <div className="">
      <main className={`${isTaskOpen ? `taskOverlay show` : `none`}`}>
        <FaRegWindowClose className="cursor-pointer text-[22px] hover:text-red-700 mb-[-15rem] ml-[14rem] text-white "onClick={closeHandler} />
        <div className="mb-[-5rem]">
          <label
            htmlFor="title"
            className="text-[20px] font-[700] mr-[1rem] ml-[1rem] text-white "
          >
            Title
          </label>
          <input
            type="text"
            id="title"
            className="p-[0.25rem] outline-0"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="mt-[-4rem]">
          <label htmlFor="author" className="text-[20px] font-[700] mr-[1rem] text-white">
            Author
          </label>
          <input
            type="text"
            id="author"
            className="p-[0.25rem] outline-0"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
        </div>
        <div className="mt-[-13rem] flex gap-[1rem] text-[18px] font-[600] justify-center items-center ">
          <button type="button" className="border-2 px-[1rem] border-green-600 text-white">
            Save
          </button>
          <button type="button" className="border-2 px-[1rem] border-red-600 text-white">
            Cancel
          </button>
        </div>
      </main>
    </div>
  );
};

export default Task;
