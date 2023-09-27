/** @format */
"use client";
import React from "react";

interface AddMemoProps {
  onAddMemo: (memo: {
    title: string;
    memoText: string;
    releaseDate: string;
  }) => void;
}

const AddMemo: React.FC<AddMemoProps> = (props) => {
  const titleRef = React.useRef<HTMLInputElement>(null);
  const memoTextRef = React.useRef<HTMLTextAreaElement>(null);
  const releaseDateRef = React.useRef<HTMLInputElement>(null);
  const rows = 5;
  function submitHandler(event: any) {
    event.preventDefault();

    // could add validation here...

    const memo = {
      title: titleRef.current!.value,
      memoText: memoTextRef.current!.value,
      releaseDate: releaseDateRef.current!.value,
    };

    props.onAddMemo(memo);
  }

  return (
    <form onSubmit={submitHandler}>
      <div className="flex ">
        <div className="flex flex-col w-full">
          <label htmlFor="title">Title</label>

          <input className="border" type="text" id="title" ref={titleRef} />
        </div>{" "}
      </div>

      <div className="flex flex-col mb-2">
        <label htmlFor="memo-text">Memo Text</label>
        <textarea
          className="border"
          rows={rows}
          id="memo-text"
          ref={memoTextRef}
        ></textarea>
      </div>

      <div className="flex justify-between mb-6">
        <div className="flex flex-col">
          <label htmlFor="date">Release Date</label>
          <input
            type="text"
            className="border"
            id="date"
            ref={releaseDateRef}
          />
        </div>
        <button className="bg-slate-200 rounded pl-4 pr-4">Add Memo</button>
      </div>
    </form>
  );
};

export default AddMemo;
