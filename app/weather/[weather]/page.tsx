import Link from "next/link";
import WeatherBoxCover from "../component/weather/WeatherBoxCover";
import { AiOutlineClose } from "react-icons/ai";
interface PageProps {
  params: { weather: string };
}
const FolderPage = ({ params }: PageProps) => {
  const pathName = decodeURI(params.weather);
  console.log(pathName);
  return (
    <div className="absolute left-[calc(50%-402.5px)] top-[calc(50%-335px)]  to-transparent  p-200px rounded-2xl z-[3]">
      <div className="bg-slate-100 absolute h-30px left-0 top-0 w-full rounded-t-2xl">
        <Link
          href="/"
          className="mr-2 flex items-center absolute right-0  top-2"
        >
          {" "}
          <AiOutlineClose />
        </Link>
      </div>

      {pathName === "날씨" && <WeatherBoxCover />}
    </div>
  );
};

export default FolderPage;
