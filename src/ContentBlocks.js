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
  },

  {
    id: 2,
    thumbnail: webHimatekkom,
    title: "Web : Himatekkom Organization Website",
  },
  {
    id: 3,
    thumbnail: appLabB201,
    title: "App : Lab B201 Practicum App",
  },
  {
    id: 4,
    thumbnail: appPermaseta,
    title: "App : Permaseta Organization App",
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
  ));

  return (
    <a href={portfolioList.href}>
      <div className="grid md:grid-cols-3 grid-cols-1 grid-flow-row gap-[4px] md:px-12 px-6 h-fit py-16 ">
        {portfolioCards}
      </div>
    </a>
  );
}

export default ContentBlocks;
