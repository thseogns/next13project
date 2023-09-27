/** @format */

import React from "react";
import Image from "next/image";
import picture from "./picture.jpg";
import DetailInfo from "./DetailInfo";
import Link from "next/link";

const InfoBox = () => {
  const linksNames = ["자기소개서", "github"];

  return (
    <div>
      <div className="flex h-full mt-50px justify-center ">
        <div className="min-w-400px m-auto\">
          <div className="w-400px h-400px  min-w-400px rounded-full overflow-hidden ">
            <Image
              className="bg-cover w-full translate-y-[-40px]"
              src={picture}
              alt="Profile"
            />
          </div>
        </div>
        <div className="ml-8 flex flex-col items-center justify-start border-solid">
          <div className="flex flex-col  h-full">
            <DetailInfo />
            <div className="h-full flex items-center">
              <p>
                좌우명: "방향이 틀리지 않는다면 언젠간 목표에 도달한다."
                <br />
                마인드: 포기하지않는 열정, 배우면된다는 마음가짐, 실수도 배움의
                일부
              </p>
            </div>
          </div>
          <div className="w-full flex">
            <Link
              className="border mr-1 p-3 w-50% block text-center rounded-lg"
              href="https://github.com/thseogns/next13project"
            >
              Github 주소
            </Link>
            <Link
              className="border ml-1 p-3 w-50% block text-center rounded-lg"
              href="/손대훈 입사지원서.pdf"
            >
              입사 지원서
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoBox;
