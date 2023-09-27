/** @format */

"use client";
import React, { useState } from "react";

const TimeComponent = () => {
  const [time, setTime] = useState("");
  const [todayDate, setTodayDate] = useState("");
  const [hourOfTime, setHourOfTime] = useState(0);

  let stringMonth = "";
  let stringDate = "";
  let stringMinutes = "";
  setInterval(() => {
    clock();
  }, 1000);

  function clock() {
    let today = new Date();

    let year = today.getFullYear(); // 년도
    let month = today.getMonth() + 1; // 월
    let date = today.getDate(); // 날짜
    let hours = today.getHours(); // 시
    let minutes = today.getMinutes(); // 분

    //시간
    if (month < 10 && month.toString().length < 3) {
      stringMonth = "0" + month.toString();
    } else {
      stringMonth = month.toString();
    }

    if (date < 10 && date.toString().length < 3) {
      stringDate = "0" + date.toString();
    } else {
      stringDate = date.toString();
    }
    if (minutes < 10 && minutes.toString().length < 3) {
      stringMinutes = "0" + minutes.toString();
    } else {
      stringMinutes = minutes.toString();
    }
    if (hours > 12) {
      hours = hours - 12;
    }
    if (hours === 0) {
      hours = 12;
    }
    setHourOfTime(hours);

    // if (hours > 11) {
    //   document.getElementById("mf").innerHTML = "오후";
    // } else {
    //   document.getElementById("mf").innerHTML = "오전";
    // }

    setTime(hours + ":" + stringMinutes);
    setTodayDate(year + "-" + stringMonth + "-" + stringDate);
  }
  return (
    <div className="mr-10 mt-1">
      <div className="">
        {hourOfTime > 11 ? <span>오후</span> : <span>오전</span>}
        {time}
      </div>
      <div className="">{todayDate}</div>
    </div>
  );
};

export default TimeComponent;
