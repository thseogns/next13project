/** @format */

import React from "react";

import Link from "next/link";
import Image from "next/image";

import airbnb from "./image/air.png";
import fizim from "./image/frz_title.png";
import binggre from "./image/빙그레.png";
import imageFlex from "./image/img.png";
import todo from "./image/Todo.png";
import nefx from "./image/Netfle.png";
import tire from "./image/tire.png";
import movieList from "./image/movieList.png";
import Hnm from "./image/Hnm.png";
import svelte from "./image/svelteP.png";
const Home = () => {
  return (
    <div className="m-10">
      <div className="grid grid-cols-3 gap-5">
        <div className="border ">
          <Link href="https://sonhnm.netlify.app/">
            <Image src={Hnm} alt="hnm" className="object-cover h-full w-full" />
          </Link>
        </div>
        <div className="border ">
          <Link href="https://thriving-melba-4514d9.netlify.app/">
            <Image
              src={airbnb}
              alt="air"
              className="object-cover h-full w-full"
            />
          </Link>
        </div>
        <div className="border">
          <Link href="https://thseogns.github.io/frizm/">
            {" "}
            <Image
              src={fizim}
              alt="fizim"
              className="object-cover h-full w-full"
            />
          </Link>
        </div>
        <div className="border">
          <Link href="https://thseogns-netflix.netlify.app/">
            <Image
              src={nefx}
              alt="nefx"
              className="object-cover h-full w-full"
            />
          </Link>
        </div>
        <div className="border">
          <Link href="https://thseogns.github.io/tire/">
            <Image
              src={tire}
              alt="tire"
              className="object-cover h-full w-full"
            />
          </Link>
        </div>
        <div className="border">
          <Link href="https://glistening-frangollo-0aa3f6.netlify.app/">
            <Image
              src={movieList}
              alt="movieList"
              className="object-cover h-full w-full"
            />
          </Link>
        </div>
        <div className="border">
          <Link href="https://thseogns.github.io/pf1/">
            <Image
              src={binggre}
              alt="binggre"
              className="object-cover h-full w-full"
            />
          </Link>
        </div>
        <div className="border">
          <Link href="https://thseogns.github.io/imgsiteSkyBlue/">
            <Image
              src={imageFlex}
              alt="imageFlex"
              className="object-cover h-full w-full"
            />
          </Link>
        </div>
        <div className="border">
          <Link href="https://thseognstodo.netlify.app/">
            <Image
              src={todo}
              alt="todo"
              className="object-cover h-full w-full"
            />
          </Link>
        </div>
        <div className="border">
          <Link href="https://friendly-squirrel-3fcaa2.netlify.app/">
            <Image
              src={svelte}
              alt="svelte"
              className="object-cover h-full w-full"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
