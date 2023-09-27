/** @format */

"use client";

import { decrement, increment, reset } from "@/redux/features/counter";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";

export function Counter() {
  const count = useAppSelector((state) => state.counterReducer.value);
  const dispatch = useAppDispatch();

  return (
    <div className="h-full flex flex-col justify-center">
      <div>
        <button
          className="bg-slate-100 text-black border rounded-md p-1 pl-2 pr-2"
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span className="p-2">{count}</span>
        <button
          className="bg-slate-100 text-black border rounded-md  p-1 pl-2 pr-2"
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
      <button
        className="bg-slate-100  text-black border rounded-md mt-2  p-1  pl-2 pr-2"
        onClick={() => dispatch(reset())}
      >
        reset
      </button>
    </div>
  );
}
