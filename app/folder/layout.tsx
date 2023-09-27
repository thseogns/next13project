/** @format */

import Window from "./component/Window";
import WindowHeader from "./component/WindowHeader";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className=" absolute top-0 right-0 w-5/6 h-window z-50  ">
      <WindowHeader />
      <Window> {children} </Window>
    </div>
  );
}
