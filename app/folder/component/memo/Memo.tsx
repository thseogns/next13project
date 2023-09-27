/** @format */

import React from "react";

interface MemoProps {
  title: string;
  releaseDate: string;
  memoText: string;
}
const Memo: React.FC<MemoProps> = (props) => {
  return (
    <li className="border p-3 mb-2">
      <h2>{props.title}</h2>
      <h3>{props.releaseDate}</h3>
      <p>{props.memoText}</p>
    </li>
  );
};

export default Memo;
