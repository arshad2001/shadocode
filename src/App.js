import logo from "./logo.svg";
import "./App.css";
import Nav from "./Nav.js";
import Content from "./Content.js";
import Footer from "./Footer.js";
import Work from "./Work.js";
import LocomotiveScroll from "locomotive-scroll";

function App() {
  return (
    <div className="white dark:bg-black dark:bg-opacity-95">
      <Nav />
      <Content />
    </div>
  );
}

export default App;
