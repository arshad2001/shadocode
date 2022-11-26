import logo from "./logo.svg";
import "./App.css";
import auroraPic from "./assets/aurora.jpg";

function Content() {
  return (
    <div className="w-screen h-screen px-12 grid place-content-center">
      {/* <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/lixhJkdkEf4"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen></iframe> */}
      <img
        src={auroraPic}
        className="max-h-[480px] shadow-white transition duration-200 ease-in-out"
      ></img>
    </div>
  );
}

export default Content;
