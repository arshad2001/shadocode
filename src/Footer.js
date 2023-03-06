import logo from "./logo.svg";
import "./App.css";

function Footer() {
  return (
    <div className=" h-fill w-screen px-12 bg-white flex-auto py-[32px] pb-[40px] mt-[16px]">
      <div className="flex items-center justify-between">
        <div id="left" className="">
          <a className="text-[24px]">
            Like what you see? Get in contact with me!
          </a>
          <div className="font-bold flex flex-row gap-4 text-[20px] cursor-pointer pt-2">
            <a
              className="hover:text-teal-300"
              href="https://www.instagram.com/shadocode/"
              target="_blank"
            >
              Insta
            </a>
            <a
              className="hover:text-teal-300"
              href="https://www.linkedin.com/in/arshadtareeqbuchori"
              target="_blank"
            >
              LinkedIn
            </a>
            <a
              className="hover:text-teal-300"
              href="https://drive.google.com/drive/folders/10c60Na-1jVS0SIjt0GgHOpjNSxjG6Kz0?usp=share_link"
              target="_blank"
            >
              Youtube
            </a>
          </div>
        </div>
        <div id="center" className="">
          <h1></h1>
          <div></div>
        </div>
        <div id="right" className="flex flex-col italic">
          <a>By Arshad Tareeq Buchori</a>
          <a>shadocode 2023</a>

          <div></div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
