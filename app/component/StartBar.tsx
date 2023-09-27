/** @format */
"use client";
import TimeComponent from "./TimeComponent";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import Image from "next/image";
import { number } from "@/redux/features/backgroundDisplay";
import windowIcon from "./image/background_image/windows-icon.png";
const StartBar = () => {
  const dispatch = useAppDispatch();
  const handleChangeBackground = () => {
    let randomNumber = Math.random();
    randomNumber = randomNumber * 3;
    randomNumber = Math.floor(randomNumber);
    console.log(randomNumber, "랜덤넘버");
    dispatch(number(randomNumber));
  };
  return (
    <div className="flex justify-between absolute bottom-0 w-full h-1/10 bg-slate-100 z-50">
      <div className="">
        <div className="">
          <button className="" onClick={handleChangeBackground}>
            <Image
              src={windowIcon}
              alt="window-icon"
              className="h-full w-11 mt-1 ml-2"
            />
          </button>
          <div className="absolute -top-8">
            <div className=""></div>
            <span className="text-white"> Click Here</span>
          </div>
        </div>
        <div className=""></div>
      </div>

      <TimeComponent />
    </div>
  );
};

export default StartBar;
