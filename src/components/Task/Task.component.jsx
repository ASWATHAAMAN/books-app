import { useState } from "react";
import { FaRegWindowClose } from "react-icons/fa";

const Task = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");

  return (
    <main className= "taskOverlay">
      <FaRegWindowClose />
      <div>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="author">Author</label>
        <input
          type="text"
          id="author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
      </div>
      <div>
        <button type="button">Save</button>
        <button type="button">Cancel</button>
      </div>
    </main>
  );
};

export default Task;
