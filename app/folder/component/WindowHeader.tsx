/** @format */

"use client";
import React from "react";

import Link from "next/link";
import { FaRegWindowMaximize, FaRegWindowMinimize } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { usePathname } from "next/navigation";

const WindowHeader = () => {
  const pathname = usePathname();

  const headerName = decodeURI(pathname.split("/")[2]);

  return (
    <div
      className={
        headerName === "날씨" ? "hidden" : "relative  mr-0 pl-2  bg-slate-300"
      }
    >
      <div className="flex justify-between">
        <div className="">{headerName}</div>
        <div className="flex">
          <button className="mr-3">
            {" "}
            <FaRegWindowMinimize />
          </button>
          <button className="mr-3">
            {" "}
            <FaRegWindowMaximize />
          </button>
          <Link href="/" className="mr-2 flex items-center">
            {" "}
            <AiOutlineClose />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default WindowHeader;
