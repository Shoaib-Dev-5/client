import React from "react";
import Tooltip from "@mui/material/Tooltip";
import { FiImage } from "react-icons/fi";
import { Avatar, IconButton } from "@mui/material";
import { FiMoreHorizontal } from "react-icons/fi";
import { TbArrowBigUp, TbArrowBigDown, TbShare3 } from "react-icons/tb";
import { BsBookmark, BsGift, BsChatLeft } from "react-icons/bs";
const Feed = () => {
  return (
    <div className="bg-white flex flex-col  sm:flex-row rounded-sm hover:border border-gray-500 transition-all duration-100">
      {/* left */}
      <div className="w-10 order-1 hidden sm:inline-flex bg-gray-200 px-1 py-1  flex-col">
        <TbArrowBigUp className="h-8 w-8 p-[2px] hover:bg-gray-300 cursor-pointer rounded-md text-gray-400" />
        <p className="text-xs font-bold text-gray-600">34.7k</p>
        <TbArrowBigDown className="h-8 w-8 p-[2px] hover:bg-gray-300 cursor-pointer rounded-md text-gray-400" />
      </div>
      {/* right */}
      <div className="p-2  order-2 space-y-1.5 w-full">
        {/* top */}
        <p className="text-gray-400 font-normal ml-2 text-sm border-b pb-3">
          Popular on Raddit right now
        </p>

      {/* Profile */}
      <div className="flex items-center space-x-1 text-gray-400 font-normal text-xs">
        <Avatar src="" sizes="small" />
        <p>.Posted by SaimSarkar</p>
        <p> 15 hours ago</p>
      </div>
      {/* Comment/message */}
      <p className="font-semibold sm:text-lg text-sm ml-2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate explicabo voluptatibus expedita laudantium, illo dignissimos sequi harum illum? Id dolore et velit non illum minima ex molestias, magni pariatur hic consequatur dignissimos tempore quasi nisi ratione sit, vitae cumque quas necessitatibus in inventore alias consectetur laudantium ad? Eum repudiandae architecto ipsam amet eos eligendi facilis excepturi harum sed similique officia, saepe tempore nam. Adipisci, debitis est amet iusto quae sit quaerat perspiciatis distinctio rem sapiente suscipit in consequuntur laudantium, blanditiis optio laborum sint voluptate dignissimos accusamus pariatur, voluptas officiis explicabo! Sed nesciunt sit maxime magnam perspiciatis mollitia consequatur modi quidem.
      </p>
      {/* Action */}
      <div className="flex space-x-1 items-center">
        {/* vote */}
        <div className=" sm:hidden items-center space-x-1  px-1 py-1 flex flex-row">
        <TbArrowBigUp className="h-8 w-8 p-[2px] hover:bg-gray-300 cursor-pointer rounded-md text-gray-400" />
        <p className="text-xs font-bold text-gray-600">34.7k</p>
        <TbArrowBigDown className="h-8 w-8 p-[2px] hover:bg-gray-300 cursor-pointer rounded-md text-gray-400" />
      </div>
      {/* Vote End */}
        <span className="action-parent">
          <BsChatLeft className="action" />
          <p className="action-text">Comments</p>
        </span>
        <span className="action-parent">
          <BsGift className="action" />
          <p className="action-text">Award</p>
        </span>
        <span className="action-parent">
          <TbShare3 className="action" />
          <p className="action-text">Share</p>
        </span>
        <span className="action-parent">
          <BsBookmark className="action" />
          <p className="action-text">Save</p>
        </span>
        <span className="action-parent">
          <FiMoreHorizontal className="action" />
        </span>
      </div>
      <div></div>
      </div>
    </div>
  );
};

export default Feed;
