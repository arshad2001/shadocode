import React from "react";
import "./App.css";
import "./nav.css";
import shadocodeLogo from "./assets/shadocode-logo.png";

function Nav() {
  return (
    <div className=" w-screen  md:text-gray-400 h-fit md:px-12 px-6 md:py-8 py-4 items-center justify-items-cente grid grid-cols-2 md:text-[16px] text-[10px] text-blue-400 fixed z-50">
      <div className="items-center justify-self-start flex cursor-pointer text-black ">
        <img
          src={shadocodeLogo}
          className="md:max-w-[28px] mr-2 max-w-[20px]"
        ></img>
        <a className="justify-self-start md:w-fit w-[61px]">welcome to</a>
        <a className="ml-2 justify-self-start font-semibold hover:text-teal-400 ">
          shadocode
        </a>
      </div>
      <div className="justify-self-end hidden md:block">
        <ul className="h-full flex space-x-4 font-medium ">
          <li className="cursor-pointer hover:text-black" src="./Work.js">
            home
          </li>
          <li className="cursor-pointer hover:text-black">about</li>
          <li className="cursor-pointer hover:text-black">work</li>
          <li className="cursor-pointer hover:text-teal-400">hobby</li>
        </ul>
      </div>
      <div className="justify-self-end block md:hidden">
        <img
          src={shadocodeLogo}
          className="md:max-w-[28px] mr-2 max-w-[20px]"
        ></img>
      </div>
    </div>
  );
}
export default Nav;
