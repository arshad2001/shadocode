import React from "react";
import "./App.css";
import "./nav.css";
import shadocodeLogoBlack from "./assets/shadocode-logo.png";
import shadocodeLogoWhite from "./assets/shadocode-logo-white.png";

function Nav() {
  return (
    <div className=" w-screen h-fit md:px-12 px-6 md:py-6 py-4 items-center justify-items-center grid grid-cols-1 md:text-[16px] text-[12px] fixed z-50 ">
      {/* <a className="justify-self-start text-slate-400 font-extralight "></a> */}
      <div className=" items-center justify-self-center flex cursor-pointer py-2 px-2 dark:text-white text-black backdrop-blur-sm border-spacing-8x border-[.1px] border-black hover:bg-black hover:text-white dark:border-white dark:hover:bg-white dark:hover:text-black ease-in-out duration-100">
        <img
          src={shadocodeLogoBlack}
          className="md:max-w-[28px] max-w-[28px] md:mr-2 mr-[4px] block dark:hidden hover:rotate-6 transition duration-300 ease-in-out"
        ></img>
        <img
          src={shadocodeLogoWhite}
          className="md:max-w-[28px] max-w-[28px] md:mr-2  hidden dark:block hover:rotate-6  transition duration-200 ease-in-out"
        ></img>
        <a className="hidden md:block justify-self-start md:w-fit w-[52px] font-bold">
          welcome to
        </a>
        <h1 className="hidden md:block md:ml-2 ml-0 justify-self-start font-normal  underline-offset-2 transition duration-200 ease-in-out">
          shadocode
        </h1>
      </div>
      <div className="justify-self-end">
        {/* <ul className="h-full flex space-x-4 font-medium text-gray-500 ">
          <li
            className="cursor-pointer hover:text-teal-400 dark:hover:text-teal-200 hover:translate-x-1"
            src="./Work.js"
          >
            home
          </li>
          <li className="cursor-pointer hover:text-teal-400 dark:hover:text-teal-200 hover:translate-x-1">
            about
          </li>
          <li className="cursor-pointer hover:text-teal-400 dark:hover:text-teal-200 hover:translate-x-1">
            work
          </li>
          <li className="cursor-pointer hover:text-teal-400 dark:hover:text-teal-200 hover:translate-x-1">
            hobby
          </li>
        </ul> */}
      </div>
      {/* <div className="justify-self-end block md:hidden hover:scale-110 transition duration-300 ease-in-out">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-4 h-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </div>
      <div className="justify-self-end block md:hidden">
        <img
          src={shadocodeLogo}
          className="md:max-w-[28px] mr-2 max-w-[20px]"
        ></img>
      </div> */}
    </div>
  );
}
export default Nav;
