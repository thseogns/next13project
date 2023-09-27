/** @format */

import React from "react";

import SkillItem from "./SkillItem";

const MyStack = () => {
  const skillName = ["main", "sub", "other"];
  const mainSkills = [
    { name: "html" },
    { name: "css" },
    { name: "js" },
    { name: "react" },
    { name: "tailwind" },
    { name: "nextjs" },
    { name: "typescript" },
    { name: "firebase" },
    { name: "svelte" },
  ];
  const subSkills = [
    { name: "JQ" },
    { name: "sass" },
    { name: "boot" },
    { name: "java" },
  ];
  const otherSkills = [
    { name: "illust" },
    { name: "Photoshop" },
    { name: "excel" },
    { name: "indesign" },
  ];

  return (
    <div>
      <h1>My Stack</h1>
      <div className="h-[93.3%] overflow-auto m-5 mb-9">
        <SkillItem skillName={skillName[0]} item={mainSkills} />
        <SkillItem skillName={skillName[1]} item={subSkills} />
        <SkillItem skillName={skillName[2]} item={otherSkills} />
      </div>
    </div>
  );
};

export default MyStack;
