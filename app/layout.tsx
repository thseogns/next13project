/** @format */

import Background from "./component/Background";
import Folder from "./component/Folder";
import "./globals.css";

import { Inter } from "next/font/google";
import { Providers } from "../redux/provider";
import StartBar from "./component/StartBar";
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="w-full h-full relative ">
        <Providers>
          <Background />
          <Folder />
          {children}
          <StartBar />
        </Providers>
      </body>
    </html>
  );
}
