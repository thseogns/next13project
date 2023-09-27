/** @format */

"use client";

import React from "react";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { list, toggle } from "@/redux/features/dispaltSlice"; // listSlice 파일 경로에 맞게 수정해주세요.

const DropDown = () => {
  const listName = ["list1", "list2", "list3", "list4"];
  const listNumber = useAppSelector(
    (state) => state.dorpDownReducer.listNumber
  );
  const toggleDisplay = useAppSelector((state) => state.dorpDownReducer.toggle);
  const dispatch = useAppDispatch();
  const handleToggle = () => {
    dispatch(toggle(!toggleDisplay));
    console.log(toggleDisplay);
  };
  const handleItemClick = (item: string) => {
    dispatch(list(item)); // 값을 전달하여 액션을 생성합니다.
    // 값을 전달하여 액션을 생성합니다.
  };

  return (
    <div className="flex flex-col items-center justify-center w-full">
      <div className="flex w-full h-30px justify-center">
        <div className="mr-10px leading-loose">{listNumber}</div>
        <button onClick={handleToggle}>Down</button>
      </div>
      {toggleDisplay && (
        <ul className="bg-gray list-none p-0 m-0 w-full">
          {listName.map((listItem) => (
            <li
              className="border w-4/5 m-auto mb-1"
              key={listItem}
              onClick={() => handleItemClick(listItem)}
            >
              {listItem}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DropDown;
