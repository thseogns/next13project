/** @format */

import React from "react";
// import { Counter } from "./function/count/Counter";

// import Resize from "./function/resize/Resize";
import MySkillCover from "./MySkillCover";
import { Counter } from "./function/Counter";
import CountUp from "./function/CountUp";
import DragAndDrop from "./function/DragAndDrop";
import ResizeDiagonal from "./function/resize/ResizeDiagonal";
import Resize from "./function/resize/Resize";
import Login from "./function/Login";
import DropDown from "./function/DropDown";
import Scroll from "./function/Scroll";
import MyStack from "./MyStack";

// import ResizeDiagonal from "./function/resize/ResizeDiagonal";
// import DragAndDrop from "./function/drag/DragAndDrop";
// import DropDown from "./function/dropDown/DropDown";
// import SkillSize from "./SkillSize";
// import Scroll from "./function/scroll/Scroll";
// import Login from "./function/login/Login";
// import CountUp from "./function/countUp/CountUp";

const MySkill = () => {
  const skillNames = [
    "Counter",
    "Resize",
    "ResizeDiagonal",
    "DragAndDrop",
    "DropDown",
    "Scroll",
    "Login",
    "CountUp",
  ];
  return (
    <div>
      <MyStack />
      <div>
        <h1 className="mb-3">My Skills</h1>
        <div className="grid grid-cols-3 ">
          {" "}
          <MySkillCover>
            <div>{skillNames[0]}</div>
            <Counter />
          </MySkillCover>
          <MySkillCover>
            <div>{skillNames[1]}</div>
            <Resize />
          </MySkillCover>
          <MySkillCover>
            <div>{skillNames[2]}</div>
            <ResizeDiagonal />
          </MySkillCover>
          <MySkillCover>
            <div>{skillNames[3]}</div>
            <DragAndDrop />
          </MySkillCover>
          <MySkillCover>
            <div>{skillNames[4]}</div>
            <DropDown />
          </MySkillCover>
          {/* <MySkillCover>
        <div>{skillNames[5]}</div>
        <Scroll />
      </MySkillCover> */}
          <MySkillCover>
            <div>{skillNames[6]}</div>
            <Login />
          </MySkillCover>
          <MySkillCover>
            <div>{skillNames[7]}</div>
            <CountUp />
          </MySkillCover>
        </div>
      </div>
    </div>
  );
};

export default MySkill;
