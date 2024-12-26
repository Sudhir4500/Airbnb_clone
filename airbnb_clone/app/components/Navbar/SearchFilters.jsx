const SearchFilters = () => {
  return (
    <div className=" h-[48px] lg:h-[64px] flex flex-row items-center justify-between lg:border shadow rounded-full">
      <div className=" hidden lg:block cursor-pointer">
        <div className=" flex flex-row items-center justify-between">
          <div
            className=" w-[250px]  h-[48px]   flex flex-col items-center justify-center  rounded-full hover:bg-gray-100 ">
            <p className=" text-xs font-semibold"> Search</p>
            <p className=" text-sm"> location</p>
          </div>

          <div
            className="w-[200px]  h-[48px] flex flex-col items-center justify-center  rounded-full hover:bg-gray-100 ">
            <p className=" text-xs font-semibold"> check in</p>
            <p className=" text-sm"> Add dates</p>
          </div>

          <div
            className="w-[200px] h-[48px] flex flex-col items-center justify-center  rounded-full hover:bg-gray-100 "> 
            <p className=" text-xs font-semibold"> check out</p>
            <p className=" text-sm"> Add dates</p>
          </div>

          <div
            className="w-[200px] h-[48px] flex flex-col items-center justify-center  rounded-full hover:bg-gray-100 ">
            <p className=" text-xs font-semibold"> Who</p>
            <p className=" text-sm"> Add guests</p>
          </div>

        </div>
      </div>
      <div className=" p-2">
        <div className=" p-2 lg:p-4 bg-airbnb hover:bg-airbnbDark transition rounded-full text-white cursor-pointer">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" style={{display:'block',fill:'none',height:'16px',width:'16px',stroke:'currentColor',strokewidth:'4',overflow:'visible',}} aria-hidden="true" role="presentation" focusable="false">
        <path fill="none" d="M13 24a11 11 0 1 0 0-22 11 11 0 0 0 0 22zm8-3 9 9"></path>
        </svg>
        </div>

      </div>
    </div>
  );
};
export default SearchFilters;
