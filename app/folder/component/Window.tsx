/** @format */
"use client";
import { usePathname } from "next/navigation";
interface pageProps {
  children: React.ReactNode;
}
const Window = ({ children }: pageProps) => {
  const pathname = usePathname();

  const name = decodeURI(pathname.split("/")[2]);
  return (
    <div
      className={
        name === "날씨"
          ? "hidden"
          : "relative top-0 left-0 w-full h-full bg-white p-3 overflow-auto"
      }
    >
      {children}
    </div>
  );
};

export default Window;
