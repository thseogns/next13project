/** @format */

import React from "react";
import Memo from "./Memo";

interface MemoType {
  id: string;
  title: string;
  memoText: string;
  releaseDate: string;
}

interface MemoListProps {
  memos: MemoType[]; // memos 속성의 타입을 MemoType[]로 지정
}

const MemoList: React.FC<MemoListProps> = (props) => {
  return (
    <ul className="overflow-y-auto mb-40px list-none p-0">
      {props.memos.map((memo) => (
        <Memo
          key={memo.id}
          title={memo.title}
          releaseDate={memo.releaseDate}
          memoText={memo.memoText}
        />
      ))}
    </ul>
  );
};

export default MemoList;
