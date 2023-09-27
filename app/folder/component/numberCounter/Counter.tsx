/** @format */
"use client";
import React from "react";

import { BiSolidUpArrow, BiSolidDownArrow } from "react-icons/bi";
const Counter = ({ name, countKey, localCount, addCounter }: any) => {
  const [count, setCount] = React.useState<number>(localCount ? localCount : 0);
  React.useEffect(() => {
    addCounter(count, countKey);
  }, [count]);

  const countUpHandler = () => {
    setCount((prev) => prev + 1);
  };

  const countDownHandler = () => {
    if (count === 0) return;
    setCount((prev) => prev - 1);
  };
  return (
    <div className="grid row-span-1 pb-5">
      <div className="text-center leading-[3]">{name}</div>
      <div className="flex  justify-center">
        <button
          className="ml-3 mr-3 text-center leading-[3]"
          aria-label="Increment value"
          onClick={countUpHandler}
        >
          <BiSolidUpArrow />
        </button>
        <span className="ml-3 mr-3">{count}</span>
        <button
          className="ml-3 mr-3  text-center leading-[3]"
          aria-label="Decrement value"
          onClick={countDownHandler}
        >
          <BiSolidDownArrow />
        </button>
      </div>
    </div>
  );
};
export default Counter;
