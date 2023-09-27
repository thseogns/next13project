import mypc from "./image/folder_image/mypc.png";
import network from "./image/folder_image/net.png";
import controll from "./image/folder_image/pngegg.png";
import trash from "./image/folder_image/trash.png";
import memo from "./image/folder_image/memo.png";
import counter from "./image/folder_image/counter.png";
import weather from "./image/folder_image/weather.png";
export const folderInfomation = [
  {
    name: "바탕화면",
    pageUrl: mypc,
    path: "/",
  },
  {
    name: "내정보",
    pageUrl: network,
    path: "/folder/내정보",
  },
  {
    name: "기술",
    pageUrl: controll,
    path: "/folder/기술",
  },
  {
    name: "프로젝트",
    pageUrl: trash,
    path: "/folder/프로젝트",
  },
  {
    name: "메모",
    pageUrl: memo,
    path: "/folder/메모",
  },
  {
    name: "숫자",
    pageUrl: counter,
    path: "/folder/숫자",
  },
  {
    name: "날씨",
    pageUrl: weather,
    path: "/weather/날씨",
  },
];
