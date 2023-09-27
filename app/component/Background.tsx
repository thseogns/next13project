/** @format */
"use client";
import React from "react";

import Image from "next/image";
import BackgroundImage from "./image/background_image/win.jpg";
import BackgroundImage1 from "./image/background_image/win2.jpg";
import BackgroundImage2 from "./image/background_image/win3.jpg";

// import StartBar from "./windowInterface/startbar/Startbar";
// import FileCover from "./windowInterface/windowFile/FileCover";
// import Window from "./windowInterface/window/Window";
// import type { RootState } from "../../../../app/store";
import { useAppSelector } from "@/redux/hooks";

const Background = () => {
  const number = useAppSelector(
    (state) => state.backgroundReducer.backgroundNumber
  );

  console.log("보낸 후 의값", number);
  return (
    <div>
      {number === 0 && (
        <Image
          src={BackgroundImage}
          alt="Background"
          className="w-full h-full align-middle max-h-screen"
        />
      )}
      {number === 1 && (
        <Image
          src={BackgroundImage1}
          alt="Background"
          className="w-full h-full align-middle max-h-screen"
        />
      )}
      {number === 2 && (
        <Image
          src={BackgroundImage2}
          alt="Background"
          className="w-full h-full align-middle max-h-screen"
        />
      )}{" "}
    </div>
  );
};

export default Background;
