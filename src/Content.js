import logo from "./logo.svg";
import "./App.css";
import auroraPic from "./assets/aurora.jpg";

function Content(props) {
  return (
    <div className="bg-white dark:bg-black w-screen h-fit grid place-content-center">
      <div
        id="segment-1"
        className="w-screen h-screen grid place-content-center justify-start px-12"
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
        className="w-screen h-screen grid place-content-center"
      >
        <img
          src={auroraPic}
          className="max-h-[480px] shadow-white transition duration-200 ease-in-out"
        ></img>
      </div>
    </div>
  );
}

export default Content;
