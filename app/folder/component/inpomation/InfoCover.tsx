/** @format */

import React from "react";
// import AlignInterface from "../AlignInterface";
// import MyHomeMap from "./map/MyHomeMap";
import InfoBox from "./InfoBox";

import { BiMapAlt } from "react-icons/bi";
import MyHomeMap from "./myHomeMap/MyHomeMap";

const InfoCover = () => {
  return (
    <div className="m-50px">
      <InfoBox />{" "}
      <h2>
        {" "}
        <BiMapAlt />
        MyHome
      </h2>
      <div className="p-9">{<MyHomeMap />}</div>
    </div>
  );
};

export default InfoCover;
