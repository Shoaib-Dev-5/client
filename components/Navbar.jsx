import { BiHomeAlt, BiSearch } from "react-icons/bi";
import { IoIosNotificationsOutline } from "react-icons/io";
import {
  AiOutlineDown,
  AiOutlineNotification,
  AiOutlinePlus,
  AiOutlineReddit,
} from "react-icons/ai";
import {
  BsArrowUpRightCircleFill,
  BsCoin,
  BsFillChatDotsFill,
} from "react-icons/bs";
import Tooltip from "@mui/material/Tooltip";
import { signIn, signOut, useSession } from "next-auth/react";
import Menu from "@mui/material/Menu";
import {
  ClickAwayListener,
  MenuItem,
  Modal,
  Paper,
  Popover,
  Typography,
} from "@mui/material";
import { useState } from "react";
import Avatar from "./Avatar";
import { Toaster, toast } from "react-hot-toast";

import ModelMui from "@/common/ModelMui";
import NavHome from "./NavHome";
import { useRouter } from "next/router";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [model, setModel] = useState(false);
  const { data, status } = useSession();
  const router = useRouter();
  const logo =
    "https://1000logos.net/wp-content/uploads/2017/05/Reddit-logo.jpg";

  const handleLogout = () => {
    setOpen(false);
    toast.promise(signOut(), {
      loading: "LogOut...",
      success: <b>Settings saved!</b>,
      error: <b>Could not save.</b>,
    });
  };
  const HandleLogIn = () => {
    signIn();
    setOpen(false);
  };
  // model
  const onClose = () => {
    setModel(false);
  };
  const openModel = () => {
    setModel(true);
  };
  return (
    <>
      <div>
        <Toaster />
      </div>
      <div className="flex h-14 shadow-sm md:space-x-2 space-x-1 items-center py-2 md:px-5 px-1 z-50 bg-white">
        {/* Logo */}
        <div className="h-20 w-20 hidden md:inline-flex cursor-pointer items-center">
          <img
            src={logo}
            alt="logo"
            className="relative"
            onClick={() => router.push("/")}
          />
        </div>
        <AiOutlineReddit className="text-white bg-red-600 rounded-full w-8 h-8 p-1  md:hidden" />
        {/* home */}
        <NavHome />
        {/* search */}
        <form onSubmit={() => {}}>
          <div className="flex hover:border-blue-500  hover:border items-center space-x-2 cursor-pointer hover:bg-transparent transition-all duration-100 bg-gray-100 rounded-full px-1 py-2">
            <BiSearch className="text-gray-400 ml:1 md:ml-2 font-light text-2xl" />
            <input
              type="text"
              className="bg-transparent outline-none w-14 sm:w-full"
              placeholder="Search Here"
            />
            <button hidden type="submit"></button>
          </div>
        </form>
        {/* left icon */}
        <div className=" space-x-2 hidden   lg:inline-flex">
          <Tooltip title="Saimmm" arrow placement="bottom-start">
            <span>
              <BsArrowUpRightCircleFill className="icon" />
            </span>
          </Tooltip>
          <Tooltip title="Saimmm" arrow placement="bottom-start">
            <span>
              <BsCoin className="icon" />
            </span>
          </Tooltip>
        </div>
        {/* right icon */}
        <div className="md:space-x-2 space-x-1 inline-flex items-center">
          <Tooltip title="Chat" arrow placement="bottom-start">
            <span>
              <BsFillChatDotsFill className="icon" />
            </span>
          </Tooltip>
          <Tooltip title="Notification" arrow placement="bottom-start">
            <span>
              <IoIosNotificationsOutline className="icon" />
            </span>
          </Tooltip>
          <Tooltip title="New Post" arrow placement="bottom-start">
            <span className="hidden sm:block">
              <AiOutlinePlus
                onClick={() => router.push("/submit")}
                className="icon"
              />
            </span>
          </Tooltip>
        </div>

        {/* right side */}

        <div className="flex items-center space-x-2">
          <div className="cursor-pointer bg-gray-100 flex items-center rounded-full px-2 py-1 hover:bg-gray-300 space-x-1">
            <AiOutlineNotification />
            <p className="font-semibold hidden md:block">Adversite</p>
          </div>
          <div
            onClick={() => setOpen(true)}
            className=" items-center hidden md:inline-flex  px-1 py-2 justify-between  hover:border hover:border-slate-200 rounded-md cursor-pointer"
          >
            <span className="flex  items-center space-x-1">
              <Avatar
                seed={status === "authenticated" && data?.user?.name}
                style="h-6 w-6 rounded-full bg-white border-gray-300 border p-1"
              />

              <p className="font-semibold hidden md:inline">
                {status === "authenticated" ? data.user.name : "signIn"}
              </p>
            </span>
            <AiOutlineDown className="text-gray-500" />
          </div>

          <Menu
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            elevation={1}
            sx={{ mt: 5, mr: 5 }}
            PaperProps={{
              style: {
                width: "100px",
              },
            }}
            // anchorEl={open}
            keepMounted
            open={open}
            onClose={() => setOpen(false)}
          >
            {status === "authenticated" ? (
              <MenuItem
                onClick={() => {
                  handleLogout();
                  () => setOpen(false);
                }}
              >
                LogOut
              </MenuItem>
            ) : (
              <MenuItem
                onClick={() => {
                  HandleLogIn();
                  () => setOpen(false);
                }}
              >
                LogIn
              </MenuItem>
            )}
            <MenuItem onClick={openModel}>Model</MenuItem>
            <ModelMui model={model} setModel={setModel} onClose={onClose} />
          </Menu>
        </div>
        {/* menu */}
      </div>
    </>
  );
};

export default Navbar;
