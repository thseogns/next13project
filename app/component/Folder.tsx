import Link from "next/link";
import Image from "next/image";

import { folderInfomation } from "./folderName";

const Folder = () => {
  return (
    <ul className="absolute top-2 left-2">
      {folderInfomation.map((info) => (
        <li key={info.name} className="mb-3">
          <Link href={info.path} className="flex flex-col items-center">
            {" "}
            <Image src={info.pageUrl} alt={info.name} className="w-14 mb-1" />
            <div className="text-white drop-shadow-text-shadow text-sm">
              {info.name}
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Folder;
