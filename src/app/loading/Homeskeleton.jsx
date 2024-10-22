import React from "react";
function Loading() {
  return (
    <div className="w-[400px] mr-3 mt-3">
      <div className=" h-[14rem] bg-gray-400  rounded-2xl  w-full animate-pulse"></div>
      <div className="my-2 flex items-center">
        <div className="min-w-[50px] min-h-[50px] size-[50px] bg-gray-500 rounded-full animate-pulse"></div>
        <div className="ml-3">
          <div className="h-[17px] w-[20rem] bg-gray-400 animate-pulse rounded-full "></div>
          <div className="h-[17px] mt-1 w-[17rem] bg-gray-300 animate-pulse rounded-full "></div>
          <div className="h-[17px] mt-1 w-[20rem] bg-gray-300 animate-pulse rounded-full "></div>
        </div>
      </div>
    </div>
  );
}

function Homeskeleton() {
  return Array(3).fill(<Loading />);
}

export default Homeskeleton;
