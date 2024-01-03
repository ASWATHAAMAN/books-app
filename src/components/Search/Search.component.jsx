const Search = ({product,editOptionHandler,deleteHandler,MdModeEdit,TbHttpDelete}) => {
  return ( <div>
{product.map((prod)=>{
  return (
    <main
      className="bg-gradient-to-r from-red-400 to-blue-500 hover:from-teal-500 w-[30%] mb-[1rem] cursor-pointer mt-[1rem] "
      key={prod.id}
    >
      <div className="">
        <div className="w-[70%] mx-auto py-[1rem] ">
          <img
            src={prod.imageUrl}
            alt={prod.title}
            className="box-border h-50 w-50 object-cover h-[20rem] w-[20rem] mx-auto"
          />
          {/* </div> */}
          {/* <div className=""> */}
          <span className=" text-[20px] font-[700] flex justify-center">
            {prod.title}
          </span>
          <br />
          <span className="text-[20px] font-[700] flex justify-center">
            <span className="text-[18px] font-[400] pr-[10px]">Author:</span>
            {prod.author}
          </span>
          {/* </div> */}
          <div className=" cursor-pointer flex justify-center gap-8">
          
          </div>
        </div>
      </div>
    </main>
  );
})}
  </div> );
}
 
export default Search;