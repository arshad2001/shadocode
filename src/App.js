import logo from "./logo.svg";
import "./App.css";
import Nav from "./Nav.js";
import Content from "./Content.js";
import Footer from "./Footer.js";

function App() {
  return (
    <div className="w-fit h-fit bg-black">
      <Nav />
      <Content />
    </div>
  );
}

export default App;
