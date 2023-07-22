import React from "react";
import { BsFire } from "react-icons/bs";
import { TiStarburstOutline } from "react-icons/ti";
import { TbArrowBigUpLines } from "react-icons/tb";
import { RiSpaceShipLine } from "react-icons/ri";
import { AiOutlineRise } from "react-icons/ai";
import { CiGrid2H } from "react-icons/ci";  
const Category = () => {
  return (
    <div className="flex items-center shadow-sm rounded-sm w-full justify-between  text-gray-500 font-semibold bg-white p-1">
      {/* left */}
      <div className="flex items-center space-x-2">
        <div className="flex hover:bg-gray-200 cursor-pointer hover:rounded-full space-x-2 items-center  p-2">
          <RiSpaceShipLine />
          <p>Best</p>
        </div>
        <div className="flex hover:bg-gray-200 cursor-pointer hover:rounded-full space-x-2 items-center  p-2">
          <BsFire />
          <p>Hot</p>
        </div>
        <div className="flex hover:bg-gray-200 cursor-pointer hover:rounded-full space-x-2 items-center  p-2">
          <TiStarburstOutline />
          <p>New</p>
        </div>
        <div className="flex hover:bg-gray-200 cursor-pointer hover:rounded-full space-x-2 items-center  p-2">
          <TbArrowBigUpLines />
          <p>Top</p>
        </div>
        <div className="flex hover:bg-gray-200 cursor-pointer hover:rounded-full space-x-2 items-center  p-2">
          <AiOutlineRise/>
          <p>Rising</p>
        </div>
      </div>
      {/* right */}
      <div>
        <div className="flex hover:bg-gray-200 cursor-pointer hover:rounded-full space-x-2 items-center  p-2">
          <CiGrid2H />
        </div>
      </div>
    </div>
  );
};

export default Category;
