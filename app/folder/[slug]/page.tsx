/** @format */

import Folder from "@/app/component/Folder";
import path from "path";
import MyInfomation from "../component/inpomation/MyInfomation";
import MySkill from "../component/mySkill/MySkill";
import Project from "../component/project/Project";
import MemoBox from "../component/memo/MemoBox";
import NumberCounter from "../component/numberCounter/NumberCounter";

interface PageProps {
  params: { slug: string };
}
const FolderPage = ({ params }: PageProps) => {
  const pathName = decodeURI(params.slug);
  console.log(pathName);
  return (
    <div>
      {pathName === "내정보" && <MyInfomation />}
      {pathName === "기술" && <MySkill />}
      {pathName === "프로젝트" && <Project />}
      {pathName === "메모" && <MemoBox />}
      {pathName === "숫자" && <NumberCounter />}
    </div>
  );
};

export default FolderPage;
