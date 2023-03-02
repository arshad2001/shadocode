import logo from "./logo.svg";
import "./App.css";
import riperAll from "./assets/riperAll_porto.png";
import webHimatekkom from "./assets/webHimatekkom_porto.png";
import appLabB201 from "./assets/labB201_porto.png";
import appPermaseta from "./assets/noImage.jpeg";
import appJahitId from "./assets/noImage.jpeg";

function changeBackground(e) {
  e.target.style.background = "white";
}

const portfolioList = [
  {
    id: 1,
    thumbnail: riperAll,
    title: "RiperAll",
    type: "UI/UX",
    desc: "Design Showcase for an all in one gadget reparation marketplace for the cities of Surabaya and Jakarta.",
    stack: "Figma, ChatGPT",
    href: "https://www.figma.com/file/52oBGEDAnr3j8hE49ABkw6/RiperAll---User-Testing?t=ZEXls2uAT0WcUEXV-6",
  },

  {
    id: 2,
    thumbnail: webHimatekkom,
    title: "Himatekkom",
    type: "Website",
    desc: "Design Showcase, and React based Website for Computer Engineering Student Commitee of FTEIC ITS.",
    stack: "Figma, HTML, TailwindCSS, ReactJS",
    href: "https://www.figma.com/file/rnaguP8MjMPi9KsEQMNb7Y/Website-Himatekkom---Convergence-team-library?node-id=526%3A1197&t=KiB94Yv3e1vHeYKe-0",
  },
  {
    id: 3,
    thumbnail: appLabB201,
    title: "B201",
    type: "Mobile App",
    desc: "Design Showcase for an all in one management app for B201 Laboratory of Computer Engineering FTEIC ITS.",
    stack: "Figma, Flutter",
    href: "https://www.figma.com/file/yGEuHERSAQ36vAxwtx5tQB/Porto---ManagementApp?node-id=30%3A1282&t=fdjNVVv6yxp7pnNq-0",
  },
  // {
  //   id: 4,
  //   thumbnail: appPermaseta,
  //   title: "App : Permaseta Organization App",
  //   href: "https://www.figma.com/file/yGEuHERSAQ36vAxwtx5tQB/Porto---ManagementApp?node-id=30%3A1282&t=x2NZ7FdbLhackIGb-0",
  // },
  // {
  //   id: 5,
  //   thumbnail: appJahitId,
  //   title: "UI/UX : Jahit.Id UI/UX Competition Submission",
  //   href: "https://www.figma.com/file/yGEuHERSAQ36vAxwtx5tQB/Porto---ManagementApp?node-id=30%3A1282&t=x2NZ7FdbLhackIGb-0",
  // },
];

function ContentBlocks() {
  const portfolioCards = portfolioList.map((portfolioList) => (
    <a href={portfolioList.href} target="_blank">
      <div
        key={portfolioList.id}
        class="h-fit transition duration-200 ease-in-out dark:bg-black-opacity-95 pb-1 p-4 flex  justify-center"
      >
        <div className="">
          <img
            class="pb-2 h-[300px] md:h-[650px] w-[300px] md:w-[800px] object-cover object-center flex  duration-200 ease-in-out "
            src={portfolioList.thumbnail}
            alt="blog"
          />
          {/* <a class="text-black dark:text-white font-normal">
            {portfolioList.title}
          </a> */}
        </div>
        <div class="px-8 flex flex-col gap-8 max-w-[900px] max-h-full text-black dark:text-white">
          <div class="flex flex-wrap flex-row items-baseline gap-8 text-[60px]">
            <h1 class="font-light">
              <em> {portfolioList.title}</em>
            </h1>
            <a class="font-bold text-[48px]">
              <em> ( {portfolioList.type} )</em>
            </a>
          </div>
          <p className="text-[32px] font-normal">Project Description</p>
          <p className="text-[24px] font-thin">{portfolioList.desc}</p>
          <p className="text-[32px] font-normal">Tech Stack</p>
          <p className="text-[24px] font-bold">
            <em>{portfolioList.stack}</em>
          </p>
          <div>
            <button>more</button>
          </div>
        </div>
      </div>
    </a>
  ));

  return (
    <div className="grid md:grid-cols-1 grid-cols-1 grid-flow-row gap-[4px] md:px-12 px-6 h-fit py-16 ">
      {portfolioCards}
    </div>
  );
}

export default ContentBlocks;
