import Image from "next/image";
import React from "react";

const GoogleProvider = () => {
  return (
    <div className="flex items-center  bg-gray-100 rounded-full my-2 py-2 pl-4 cursor-pointer hover:bg-gray-200 hover:scale-100 transition">
      <span className="ml-4" style={{marginLeft:'20px'}}>
        <Image
          alt="google"
          src="/images/googlelogo.png"
          width={25}
          height={25}
        />
      </span>
      <p className="text-gray-600 font-semibold ml-2">Google Login</p>
    </div>
  );
};

export default GoogleProvider;
