import logo from "./logo.svg";
import "./App.css";

function ContentBlocks() {
  return (
    <div class="h-full overflow-hidden hover:rotate-1 hover:-translate-y-2 hover:shadow-2xl hover:shadow-teal-200/80 hover:border-teal-200 hover:border-2 transition duration-200 ease-in-out dark:bg-gray-900 bg-gray-300">
      <div
        class="h-28 lg:h-48 md:h-36 w-full object-cover object-center"
        src="https://dummyimage.com/720x400"
        alt="blog"
      />
    </div>
  );
}

export default ContentBlocks;
