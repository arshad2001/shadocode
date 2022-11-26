import React from "react";
import "./App.css";
import "./nav.css";
import shadocodeLogo from "./assets/shadocode-logo-white.png";

function Nav() {
  return (
    <div className="w-screen h-fit px-12 py-4 items-center justify-items-cente grid grid-cols-2 text-[16px] text-gray-700 fixed z-50">
      <div className="items-center justify-self-start flex cursor-pointer text-white">
        <img src={shadocodeLogo} className="max-w-[28px] mr-2 "></img>
        <a className="justify-self-start">welcome to</a>
        <a className="ml-2 justify-self-start font-semibold hover:text-teal-400 ">
          shadocode
        </a>
      </div>
      <div className="justify-self-end">
        <ul className="h-full flex space-x-4 font-medium ">
          <li className="cursor-pointer hover:text-white ">
            home
          </li>
          <li className="cursor-pointer hover:text-white">about</li>
          <li className="cursor-pointer hover:text-white">work</li>
          <li className="cursor-pointer hover:text-white">hobby</li>
        </ul>
      </div>
    </div>
  );
}
export default Nav;
