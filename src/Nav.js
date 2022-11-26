import React from "react";
import "./App.css";
import "./nav.css";
import shadocodeLogo from "./assets/shadocode-logo.png";

function Nav() {
  return (
    <div className="w-screen h-fit px-12 py-4 items-center justify-items-cente grid grid-cols-2 text-[16px] text-gray-400 fixed z-50">
      <div className="items-center justify-self-start flex cursor-pointer text-black">
        <img src={shadocodeLogo} className="max-w-[28px] mr-2 "></img>
        <a className="justify-self-start">welcome to</a>
        <a className="ml-2 justify-self-start font-semibold hover:text-teal-400 ">
          shadocode
        </a>
      </div>
      <div className="justify-self-end">
        <ul className="h-full flex space-x-4 font-medium ">
          <li className="cursor-pointer hover:text-black ">home</li>
          <li className="cursor-pointer hover:text-black">about</li>
          <li className="cursor-pointer hover:text-black">work</li>
          <li className="cursor-pointer hover:text-black">hobby</li>
        </ul>
      </div>
    </div>
  );
}
export default Nav;
