import { NavLink, useNavigate } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import { useState } from "react";

const WelcomePage = () => {
  const navigate = useNavigate();
  const [item, setItem] = useState("");
  const searchBtnHandler = () => {
    if(item === ""){
      alert(`Enter a proper search text`)
    }else{
      navigate(`/search`,{state:item});
    }
  };

  return (
    <>
      <main className="flex flex-col justify-center items-center h-screen bg-[url(https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Ym9va3NoZWxmfGVufDB8fDB8fHww)]">
        <div className="flex flex-col gap-8 ">
          <h1 className="text-[7rem] font-[700] text-center text-red-600 border-black border-2 bg-black px-[2.5rem] py-[0.5rem] font-serif cursor-context-menu">
            The Bookshelf
          </h1>
          <div className="flex justify-center items-center">
            <input
              type="text"
              className="py-[0.5rem] pr-[10rem] pl-[1rem] text-[20px]"
              placeholder="Search..."
              value={item}
              onChange={(e) => setItem(e.target.value)}
            />
            <BsSearch
              className="text-[2.9rem] text-red-600 bg-black p-[0.80rem] cursor-pointer"
              onClick={searchBtnHandler}
            />
          </div>
          <div className="flex gap-8 items-center justify-center">
            <NavLink
              to={`/novels`}
              className="text-[18px] font-[600] border-2 px-[1rem] border-blue-400 bg-blue-400 text-white hover:bg-blue-600 hover:border-blue-600 cursor-pointer font-serif"
            >
              NOVELS
            </NavLink>
            <NavLink
              to={`/fantasy`}
              className="text-[18px] font-[600] border-2 px-[1rem] border-blue-400 bg-blue-400 text-white hover:bg-blue-600 hover:border-blue-600 cursor-pointer font-serif"
            >
              FANTASY
            </NavLink>
            <NavLink
              to={`/mystery`}
              className="text-[18px] font-[600] border-2 px-[1rem] border-blue-400 bg-blue-400 text-white hover:bg-blue-600 hover:border-blue-600 cursor-pointer font-serif"
            >
              MYSTERY
            </NavLink>
            <NavLink
              to={`/horror`}
              className="text-[18px] font-[600] border-2 px-[1rem] border-blue-400 bg-blue-400 text-white hover:bg-blue-600 hover:border-blue-600 cursor-pointer font-serif"
            >
              HORROR
            </NavLink>
          </div>
        </div>
      </main>
    </>
  );
};

export default WelcomePage;
