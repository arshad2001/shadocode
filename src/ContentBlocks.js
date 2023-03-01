import logo from "./logo.svg";
import "./App.css";
import riperAll from "./assets/riperAll_porto.png";
import webHimatekkom from "./assets/webHimatekkom_porto.png";
import appLabB201 from "./assets/labB201_porto.png";
import appPermaseta from "./assets/noImage.jpeg";
import appJahitId from "./assets/noImage.jpeg";

const portfolioList = [
  {
    id: 1,
    thumbnail: riperAll,
    title: "UI/UX : RiperAll",
    href: "https://www.figma.com/file/52oBGEDAnr3j8hE49ABkw6/RiperAll---User-Testing?t=ZEXls2uAT0WcUEXV-6",
  },

  {
    id: 2,
    thumbnail: webHimatekkom,
    title: "Web : Himatekkom Organization Website",
    href: "https://www.figma.com/file/rnaguP8MjMPi9KsEQMNb7Y/Website-Himatekkom---Convergence-team-library?node-id=526%3A1197&t=KiB94Yv3e1vHeYKe-0",
  },
  {
    id: 3,
    thumbnail: appLabB201,
    title: "App : Lab B201 Practicum App",
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
        class="h-fit transition duration-200 ease-in-out dark:bg-black-opacity-95 pb-1 flex p-4"
      >
        <div className="">
          <img
            class="pb-2 h-[300px] md:h-[800px] w-full object-cover object-center flex  duration-200 ease-in-out "
            src={portfolioList.thumbnail}
            alt="blog"
          />
          {/* <a class="text-black dark:text-white font-normal">
            {portfolioList.title}
          </a> */}
        </div>
        <div class="text-white px-8 flex flex-col gap-8 w-[1000px]">
          <p className="text-[48px] font-normal">Project Title</p>
          <p className="text-[32px] font-normal">Project Description</p>
          <p className="text-[24px] font-thin">
            Commodo magna ut officia irure aliqua id eu nulla eu elit incididunt
            ipsum sint. Qui ullamco irure dolore mollit quis anim aliquip magna
            in ad deserunt commodo occaecat. Voluptate esse nostrud nisi nisi
            duis excepteur enim et fugiat ad dolor non aliqua.
          </p>
          <p className="text-[32px] font-normal">Project Tech Stack</p>
          <ul className="text-[24px] font-normal">
            <li>Figma</li>
            <li>Tailwind</li>
            <li>Chatgpt</li>
          </ul>
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
