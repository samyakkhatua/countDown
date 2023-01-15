import "./App.css";
import CountDown from "./CountDown";

function App() {
  return (
    <div className="flex flex-col justify-center items-center m-20 bg-gray-900">
      <CountDown />

      <h1 class="pb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl lg:text-6xl text-white text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
        Coming Soon
      </h1>
      <p class="mb-6 text-lg font-normal lg:text-xl sm:px-16 xl:px-48 text-gray-400">
        Till then join the waitlist for latest updates of our product!
      </p>

      <input
        type="email"
        id="helper-text"
        aria-describedby="helper-text-explanation"
        class="border text-sm rounded-lg block w-96 p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white"
        placeholder="name@hamaranagar.com"
      />
      <p
        id="helper-text-explanation"
        class="mt-2 text-sm text-gray-500 dark:text-gray-400"
      >
        We'll never share your details. Read our{" "}
        <a href="#" class="font-medium text-blue-600 hover:underline">
          Privacy Policy
        </a>
        .
      </p>

      <a
        href="#"
        class="inline-flex mt-4 items-center justify-center px-5 py-3 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 dark:focus:ring-blue-900"
      >
        Join Waitlist
        <svg
          class="w-5 h-5 ml-2 -mr-1"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
            clip-rule="evenodd"
          ></path>
        </svg>
      </a>
    </div>
  );
}

export default App;
