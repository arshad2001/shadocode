import logo from "./logo.svg";
import "./App.css";
import auroraPic from "./assets/aurora.jpg";
import LocomotiveScroll from "locomotive-scroll";

function Work() {
  var scroll = new LocomotiveScroll();
  return (
    <div className="w-screen h-screen px-12 grid place-content-center">
      <div data-scroll-container>
        <div data-scroll-section>
          <h1 data-scroll>Hey</h1>
          <p data-scroll>👋</p>
        </div>
        <div data-scroll-section>
          <h2 data-scroll data-scroll-speed="1">
            What's up?
          </h2>
          <p data-scroll data-scroll-speed="2">
            😬
          </p>
        </div>
      </div>
    </div>
  );
}

export default Work;
