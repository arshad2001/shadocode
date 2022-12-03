import logo from "./logo.svg";
import "./App.css";
import auroraPic from "./assets/aurora.jpg";
import ContentBlocks from "./ContentBlocks";

function Content(props) {
  return (
    <div className=" w-screen h-min-[1440px] h-fit grid place-content-center pt-12">
      <div
        id="segment-1"
        className="w-screen h-fit grid place-content-center md:px-12 px-6 justify-start py-8"
      >
        {/* <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/lixhJkdkEf4"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen></iframe> */}
        <a className="md:text-[50px] text-[31px] text-black dark:text-white">
          Hi! my name is Arshad ✌ <br></br>I am a Muslim 🕋 , UI/UX
          designer-enthusiast ✍ <br></br>& frontend developer 👨‍💻<br></br>
          from the beloved Indonesia 💖👊
        </a>
      </div>
      <div
        id="segment-2"
        className="w-screen h-fit grid place-content-center md:px-12 px-8 md:py-12 justify-center py-8"
      >
        <a className="md:text-[30px] text-[21px] text-black dark:text-white">
          and here are a few of my projects 👇👇👇
        </a>
      </div>

      <div className="grid md:grid-cols-3 grid-cols-1 grid-flow-row gap-[1px] md:px-12 px-6 h-fit py-12">
        <ContentBlocks />
        <ContentBlocks />
        <ContentBlocks />
        <ContentBlocks />
        <ContentBlocks />
        <ContentBlocks />
        <ContentBlocks />
        <ContentBlocks />
        <ContentBlocks />
        <ContentBlocks />
      </div>

      <div
        id="segment-blank"
        className="w-screen h-screen grid place-content-center"
      >
        <img
          src={auroraPic}
          className="md:max-h-[480px] max-h-[300px] shadow-white transition duration-200 ease-in-out hover:rotate-3 md:my-0 my-4"
        ></img>
      </div>
    </div>
  );
}

export default Content;
