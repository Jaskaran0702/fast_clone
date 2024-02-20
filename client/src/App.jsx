import { useRef, useState } from "react";
import "./App.css";
import CountUp from "react-countup";
import { IoReload } from "react-icons/io5";
import { CiCircleQuestion } from "react-icons/ci";
import { CiFacebook } from "react-icons/ci";
import { CiTwitter } from "react-icons/ci";

function App() {
  const [speed, setspeed] = useState(null);
  let startMethod = useRef(null);
  return (
    <div className="text-center flex flex-col items-center justify-around px-50 py-0 box-border w-full h-full">
      <div className="h-1/4">
        <img
          src="https://fast.com/assets/new-logo-vert-37861c.svg"
          alt="fast-logo"
          className="w-40 h-40"
        />
      </div>
      <div className="">
        <h3 className="font-bold text-3xl font-">Your Internet Speed is</h3>
        <div className="mt-9 flex items-center justify-center h-9">
          <CountUp
            start={speed ? speed - 50 : 0}
            end={speed ? speed : 0}
            duration={5}
            onEnd={console.log("end")}
            onStart={console.log("start")}
          >
            {({ countUpRef, start }) => {
              startMethod = start;
              return (
                <>
                  <div>
                    <div className="text-9xl leading-10" ref={countUpRef}></div>
                  </div>
                  <div className="text-8xl flex items-center justify-center flex-col">
                    <div className="mt-5 text-4xl font-bold">Mbps</div>
                    <div className="cursor-pointer mt-10 flex items-center justify-center w-65 h-65 border-3 border-solid border-green-600 rounded-full">
                      <IoReload className="text-4xl" />
                    </div>
                  </div>
                </>
              );
            }}
          </CountUp>
        </div>
      </div>
      <div className="w-full h-full mt-5 flex flex-col items-center justify-between flex-1">
        <button className="bg-none mb-4 mt-4 outline-none border border-solid border-gray-300 text-gray-500 text-lg px-8 py-2 rounded-10 focus:border-blue-500 focus:text-blue-500 transition duration-300 hover:border-blue-500 hover:text-blue-500">Show more Info</button>
        <div className="flex items-center justify-center">
          <div className="w-45 h-45 rounded-full bg-gray-700 flex items-center justify-center m-10 "><CiCircleQuestion className="text-5xl bg-white  hover:cursor-pointer hover:bg-blue-500"/></div>
          <div className="w-45 h-45 rounded-full bg-gray-700 flex items-center justify-center m-10"><CiFacebook className="text-5xl bg-white  hover:cursor-pointer hover:bg-blue-500"/></div>
          <div className="w-45 h-45 rounded-full bg-gray-700 flex items-center justify-center m-10"><CiTwitter className="text-5xl bg-white  hover:cursor-pointer hover:bg-blue-500"/></div>
        </div>
        <div className="w-full flex items-center justify-items-end pr-10 box-border">
          <img
            src="https://fast.com/assets/poweredby-865a3b.svg"
            alt="powered"
            className="w-40"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
