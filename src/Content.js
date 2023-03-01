import logo from "./logo.svg";
import "./App.css";
import auroraPic from "./assets/aurora.jpg";
import ContentBlocks from "./ContentBlocks";
import riperAll from "./assets/riperAll_porto.png";

function changeBackground(e) {
  e.target.style.background = "red";
}

function myniggah(e) {
  e.preventDefault();
  console.log("u heb nice ass.");
}

function Content(props) {
  return (
    <div className=" w-screen min-h-[1440px] h-fit grid place-content-center">
      <div
        id="segment-1"
        className="w-screen min-h-[100vh] h-fit grid place-content-center md:px-12 px-6 justify-center py-16 -mt-2"
      >
        {/* <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/lixhJkdkEf4"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen></iframe> */}
        <a className="md:text-[50px] text-[31px] text-black dark:text-white font-light">
          <b>Hi!</b> my name is Arshad Tareeq Buchori ✌😎<br></br>
          but you can call me <b>Arshad</b>👍 <br></br>
          {/* I am a <b>Muslim</b> 🕋 ,{" "}
          <b>UI/UX</b> designer-enthusiast 🎨<br></br>&{" "}
          <b>frontend developer</b> 💻
          <br></br>
          from the beloved <b>Indonesia</b> 💖👊 */}
        </a>
        <a
          className="md:text-[31px] text-[21px] text-black dark:text-white hover:text-teal-300 w-fit font-light"
          href="https://drive.google.com/drive/folders/10c60Na-1jVS0SIjt0GgHOpjNSxjG6Kz0?usp=share_link"
          target="_blank"
        >
          <br></br>👉 If u're in a hurry here's my <b>CV</b> and{" "}
          <b>Portfolio!</b>
        </a>
      </div>
      <div
        id="segment-2"
        className="w-screen min-h-[100vh] h-fit grid place-content-center md:px-12 px-6 justify-center py-16 -mt-2"
      >
        <div className="">
          <button onMouseOver={changeBackground}>Hover over me!</button>
        </div>
        <a className="md:text-[50px] text-[31px] text-black dark:text-white font-light">
          I am a <b>Muslim</b> 🕋 , <b>UI/UX</b> designer-enthusiast 🎨<br></br>
          & <b>frontend developer</b> 💻
          <br></br>
          from the beloved <b>Indonesia</b> 💖👊
          <br></br>
          and here are a few of my projects 👇👇👇
        </a>
      </div>
      {/* <div
        id="segment-3"
        className="w-screen min-h-[100vh] h-fit grid place-content-center md:px-12 px-8 md:py-12 justify-center py-8"
      >
        <a className="dark:text-white"> nice ass </a>
        <button
          onClick={myniggah}
          className="bg-white hover:bg-transparent hover:border-spacing-8x border-[.1px] border-white hover:text-white ease-in-out duration-200"
        >
          {" "}
          button{" "}
        </button>
      </div> */}  
      <ContentBlocks />
      <div
        id="segment-blank"
        className="w-screen min-h-[100vh] h-fit grid place-content-center"
      >
        <a className="justify-self-center self-center text-teal-100 font-light absolute md:pt-[450px] pt-[260px] md:text-[16px] text-[10px] z-0 ">
          shadocode ver 1.0 | by <b>Arshad Tareeq Buchori</b>
        </a>
        <img
          src={auroraPic}
          className="md:max-h-[480px] max-h-[300px] shadow-white transition duration-200 ease-in-out md:my-0 my-4m z-10 hover:-translate-y-[35px] hover:shadow-2xl hover:shadow-teal-300/70"
        ></img>
      </div>
    </div>
  );
}

export default Content;
