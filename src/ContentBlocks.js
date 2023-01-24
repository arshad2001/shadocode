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
  {
    id: 4,
    thumbnail: appPermaseta,
    title: "App : Permaseta Organization App",
    href: "https://www.figma.com/file/yGEuHERSAQ36vAxwtx5tQB/Porto---ManagementApp?node-id=30%3A1282&t=x2NZ7FdbLhackIGb-0",
  },
  {
    id: 5,
    thumbnail: appJahitId,
    title: "UI/UX : Jahit.Id UI/UX Competition Submission",
    href: "https://www.figma.com/file/yGEuHERSAQ36vAxwtx5tQB/Porto---ManagementApp?node-id=30%3A1282&t=x2NZ7FdbLhackIGb-0",
  },
];

function ContentBlocks() {
  const portfolioCards = portfolioList.map((portfolioList) => (
    <a href={portfolioList.href}>
      <div
        key={portfolioList.id}
        class="h-fit hover:bg-transparent transition duration-200 ease-in-out dark:bg-black bg-transparent pb-1"
      >
        <img
          class="pb-2 h-44 md:h-80 w-full object-cover object-center flex hover:scale-95  duration-200 ease-in-out rounded-2xl"
          src={portfolioList.thumbnail}
          alt="blog"
        />
        <a class="text-black dark:text-white ">{portfolioList.title}</a>
      </div>
    </a>
  ));

  return (
    <div className="grid md:grid-cols-3 grid-cols-1 grid-flow-row gap-[4px] md:px-12 px-6 h-fit py-16 ">
      {portfolioCards}
    </div>
  );
}

export default ContentBlocks;
