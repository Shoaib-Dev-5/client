import React from "react";
import { BsLink45Deg } from "react-icons/bs";
import { FiImage } from "react-icons/fi";
import { AiOutlineReddit } from "react-icons/ai";
import { useRouter } from "next/router";
import Tooltip from "@mui/material/Tooltip";
import Avatar from "./Avatar";
import { useSession } from "next-auth/react";

const Home = () => {
  const router = useRouter();
  const {data}=useSession();
  return (
    <div
      className="flex rounded-sm items-center bg-white p-3 py-2 w-full space-x-2"
      onClick={() => router.push("/submit")}
    >
      {/* <AiOutlineReddit className="h-8 w-8 bg-gray-300 rounded-full p-1 " />
       */}
       <Avatar seed={data?.user?.name} style="h-10 w-10 rounded-full bg-white border-gray-300 border p-1" />
      <input
        type="text"
        className=" hover:border hover:border-blue-500 placeholder:font-semibold placeholder:text-gray-400 text-lg bg-gray-100 py-1 rounded-sm pl-2 outline-none flex-1"
        placeholder="create post"
      />
      <Tooltip title="Image" placement="bottom-start">
        <span>
          <FiImage className="cursor-pointer h-7 w-7 text-gray-400 hover:bg-gray-200 hover:rounded-sm  p-1" />
        </span>
      </Tooltip>
      <Tooltip title="Link" placement="bottom-start">
        <span>
          <BsLink45Deg className="cursor-pointer h-7 w-7 text-gray-400 hover:bg-gray-200 hover:rounded-sm p-1" />
        </span>
      </Tooltip>
    </div>
  );
};

export default Home;
