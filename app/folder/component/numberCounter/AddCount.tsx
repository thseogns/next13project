/** @format */
"use client";
import React from "react";

interface AddCountProps {
  addName: (name: string) => void;
}

const AddCount: React.FC<AddCountProps> = (props) => {
  const titleRef = React.useRef<HTMLInputElement>(null);
  const submitHandler = (e: any) => {
    e.preventDefault();
    if (titleRef.current!.value.trim() === "") {
      return alert("공백은 입력할 수 없습니다.");
    }
    console.log(titleRef.current!.value);
    const Name = titleRef.current!.value;
    props.addName(Name);
    titleRef.current!.value = "";
  };
  return (
    <div className="mb-8">
      <form onSubmit={submitHandler} className="flex">
        <label htmlFor="title" className="mr-5">
          카운트이름
        </label>

        <input
          className="border rounded-md"
          type="text"
          id="title"
          ref={titleRef}
        />
        <button className="ml-5 bg-slate-100 pl-3 pr-3 rounded-md shadow-md">
          추가
        </button>
      </form>
    </div>
  );
};

export default AddCount;
