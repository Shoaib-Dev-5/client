import CreateModel from "@/common/createModel";
import { Popover } from "@mui/material";
import { useRouter } from "next/router";
import React from "react";
import { useState } from "react";
import { AiOutlineDown, AiOutlinePlus } from "react-icons/ai";
import { BiHomeAlt } from "react-icons/bi";
import { MdGroupAdd } from "react-icons/md";

const NavHome = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [model, setModel] = useState(false);
  const router=useRouter();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  const clickModel = () => {
    setAnchorEl(null);
    setModel(true);
  };
  const closeModel = () => {
    setModel(false);
  };
  return (
    <>
      <div
        onClick={handleClick}
        className="flex cursor-pointer flex-1 p-2 items-center hover:rounded-md hover:border hover:border-gray-100"
      >
        <div className="flex-1  items-center flex">
          <BiHomeAlt className="w-6 h-6" />
          <p className="font-semibold hidden lg:inline">Home</p>
        </div>
        <AiOutlineDown />
      </div>
      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        elevation={4}
        sx={{ mt: 1 }}
        PaperProps={{
          style: {
            width: "200px",
          },
        }}
      >
        <div className="w-full divide-y bg-white">
          {/* item */}
          <span
            onClick={clickModel}
            className="px-2 py-2 cursor-pointer flex  space-x-2 bg-slate-50 hover:bg-gray-200"
          >
            <MdGroupAdd size={22} />
            <p className="text-sm font-semibold">create New Comunity</p>
          </span>
          {/* item */}
          <span onClick={()=>router.push('/submit')} className="px-2 py-2 cursor-pointer flex  space-x-2 bg-slate-50 hover:bg-gray-200">
            <AiOutlinePlus size={22} />
            <p className="text-sm font-semibold">create New Post</p>
          </span>
        </div>
      </Popover>
      <CreateModel model={model} closeModel={closeModel} />
    </>
  );
};

export default NavHome;
