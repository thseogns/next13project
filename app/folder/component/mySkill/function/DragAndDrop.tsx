/** @format */
"use client";
import React, { DragEvent } from "react";

const DragAndDrop = () => {
  const dragItem = React.useRef<null | number>(null);
  const dragOverItem = React.useRef<null | number>(null);
  const [list, setList] = React.useState([
    "Item 1",
    "Item 2",
    "Item 3",
    "Item 4",
    "Item 5",
    "Item 6",
  ]);

  const dragStart = (e: DragEvent, position: number) => {
    dragItem.current = position;
    if (e.target instanceof HTMLElement) {
      console.log(e.target.innerHTML);
    }
  };
  const dragEnter = (e: DragEvent, position: number) => {
    dragOverItem.current = position;
    if (e.target instanceof HTMLElement) {
      console.log(e.target.innerHTML);
    }
  };

  const drop = (e: DragEvent) => {
    if (dragItem.current !== null && dragOverItem.current !== null) {
      const copyListItems = [...list];
      const dragItemContent = copyListItems[dragItem.current];
      copyListItems.splice(dragItem.current, 1);
      copyListItems.splice(dragOverItem.current, 0, dragItemContent);
      dragItem.current = null;
      dragOverItem.current = null;
      setList(copyListItems);
    }
  };
  return (
    <>
      {list &&
        list.map((item, index) => (
          <div
            className="mb-1 border w-4/5"
            onDragStart={(e) => {
              dragStart(e, index);
            }}
            onDragEnter={(e) => dragEnter(e, index)}
            onDragEnd={drop}
            key={index}
            draggable
          >
            {item}
          </div>
        ))}
    </>
  );
};

export default DragAndDrop;
