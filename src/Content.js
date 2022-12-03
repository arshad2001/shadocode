import logo from "./logo.svg";
import "./App.css";
import auroraPic from "./assets/aurora.jpg";

function Content(props) {
  return (
    <div className=" w-screen h-min-[1440px] h-fit grid place-content-center">
      <div
        id="segment-1"
        className="w-screen h-screen grid place-content-center px-12 justify-start"
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
          Hi! my name is Arshad ✌ <br></br>I am a Muslim 🕋 <br></br>
          UI/UX designer-enthusiast ✍ <br></br>& frontend developer 👨‍💻<br></br>
          from Indonesia 💖👊
        </a>
      </div>
      <div
        id="segment-2"
        className="w-screen h-fit grid place-content-center px-12 justify-end"
      >
        <a className="md:text-[30px] text-[21px] text-black dark:text-white">
          and here are a view of my projects...
        </a>
      </div>
      <div
        id="segment-blank"
        className="w-screen h-screen grid place-content-center"
      >
        <img
          src={auroraPic}
          className="md:max-h-[480px] max-h-[320px] shadow-white transition duration-200 ease-in-out hover:rotate-3"
        ></img>
      </div>
    </div>
  );
}

export default Content;
