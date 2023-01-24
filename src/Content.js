import logo from "./logo.svg";
import "./App.css";
import auroraPic from "./assets/aurora.jpg";
import ContentBlocks from "./ContentBlocks";
import riperAll from "./assets/riperAll_porto.png";

const ballin = [{ niggah: "riperAll" }];

function Content(props) {
  return (
    <div className=" w-screen min-h-[1440px] h-fit grid place-content-center">
      <div
        id="segment-1"
        className="w-screen min-h-[100vh] h-fit grid place-content-center md:px-12 px-6 justify-start py-16 -mt-2"
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
        <a
          className="md:text-[50px] text-[31px] text-black dark:text-white hover:text-teal-300 w-fit"
          href="https://drive.google.com/drive/folders/10c60Na-1jVS0SIjt0GgHOpjNSxjG6Kz0?usp=share_link"
        >
          Here is my CV and Portfolio!
        </a>
      </div>
      <div
        id="segment-2"
        className="w-screen min-h-[100vh] h-fit grid place-content-center md:px-12 px-8 md:py-12 justify-center py-8"
      >
        <a className="md:text-[30px] text-[21px] text-black dark:text-white">
          and here are a few of my projects 👇👇👇
        </a>
      </div>

      <div className="grid md:grid-cols-3 grid-cols-1 grid-flow-row gap-[1px] md:px-12 px-6 h-fit py-16">
        <a
          id="riperAll"
          href="https://www.figma.com/file/52oBGEDAnr3j8hE49ABkw6/RiperAll---User-Testing?t=u3X7YQ3dnzVP0E0v-6"
        >
          {ballin.map(({ nuts }) => (
            <ContentBlocks niggah={nuts} />
          ))}
          <ContentBlocks />
        </a>
        <a
          id="websiteHimatekkom"
          href="https://www.figma.com/file/rnaguP8MjMPi9KsEQMNb7Y/Website-Himatekkom---Convergence-team-library?t=u3X7YQ3dnzVP0E0v-6"
        >
          <ContentBlocks />
        </a>
        <a href="https://www.instagram.com/direct/t/340282366841710300949128218359528260178">
          <ContentBlocks />
        </a>
        <a href="https://www.instagram.com/direct/t/340282366841710300949128218359528260178">
          <ContentBlocks />
        </a>
        <a href="https://www.instagram.com/direct/t/340282366841710300949128218359528260178">
          <ContentBlocks />
        </a>
        <a href="https://www.instagram.com/direct/t/340282366841710300949128218359528260178">
          <ContentBlocks />
        </a>
      </div>

      <div
        id="segment-blank"
        className="w-screen min-h-[100vh] h-fit grid place-content-center"
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
