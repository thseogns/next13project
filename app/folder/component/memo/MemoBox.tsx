/** @format */
"use client";
import React, { useState, useEffect, useCallback } from "react";

import MeMoList from "./MemoList";
import AddMemo from "./AddMemo";
interface Memo {
  id: string;
  title: string;
  memoText: string;
  releaseDate: string;
}
const MemoBox = () => {
  const [memos, setMemos] = useState<Memo[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchMemosHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(
        "https://memo-9692d-default-rtdb.firebaseio.com/memo.json"
      );

      if (!response.ok) {
        throw new Error("Something went wrong!");
      }
      const loadMemos: Memo[] = [];

      const data = await response.json();
      console.log("데이터의값", data);
      for (const key in data) {
        loadMemos.push({
          id: key,
          title: data[key].title,
          memoText: data[key].memoText,
          releaseDate: data[key].releaseDate,
        });
      }

      setMemos(loadMemos);
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError("An unknown error occurred.");
      }
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchMemosHandler();
  }, [fetchMemosHandler]);

  const addMemoHandler = async (memo: any) => {
    const response = await fetch(
      "https://memo-9692d-default-rtdb.firebaseio.com/memo.json",
      {
        method: "POST",
        body: JSON.stringify(memo),
        headers: { "Content-Type": "aplication/json" },
      }
    );
    const data = response.json();
    console.log(data);
  };

  let content = <p>Found no Memos.</p>;

  if (memos.length > 0) {
    content = <MeMoList memos={memos} />;
  }

  if (error) {
    content = <p>{error}</p>;
  }

  if (isLoading) {
    content = <p>Loading...</p>;
  }

  return (
    <div className="h-[93.3%] w-1/10 m-auto pt-20px">
      <div className="h-1/2">
        <section>
          <AddMemo onAddMemo={addMemoHandler} />
        </section>
        <section>
          <button onClick={fetchMemosHandler}>Fetch Memos</button>
        </section>
      </div>
      <section className="h-1/2 overflow-auto">{content}</section>
    </div>
  );
};

export default MemoBox;
