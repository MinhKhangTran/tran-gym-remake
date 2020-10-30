import React from "react";
import { FaBars } from "react-icons/fa";
import { navbar } from "../assets/data";
export default function Navbar() {
  const [toggle, setToggle] = React.useState(false);
  return (
    <>
      <nav className="bg-black fixed top-0 left-0 w-screen z-50" id="trangym">
        <div className="md:flex w-11/12 md:w-2/3 mx-auto items-center">
          <div className="flex  text-white justify-between text-3xl font-bold px-4 flex-grow">
            <h1>TranGym</h1>
            <button
              className="md:hidden"
              onClick={() => {
                setToggle(!toggle);
              }}
            >
              <FaBars></FaBars>
            </button>
          </div>

          <div
            className={`${
              toggle
                ? "text-white px-4 pb-2 md:pb-0 text-xl font-semibold md:flex w-1/2 justify-between block h-40 overflow-hidden transition transition-all duration-700 ease-in-out md:h-auto items-center"
                : "text-white px-4 pb-2 md:pb-0 text-xl font-semibold md:flex w-1/2 justify-between hidden h-0 overflow-hidden transition transition-all duration-700 ease-in-out md:h-auto items-center"
            }`}
          >
            {navbar.map((link) => {
              const { id, url, text } = link;
              return (
                <p className="uppercase py-2 hover:text-orange-200" key={id}>
                  <a href={url} onClick={() => setToggle(!toggle)}>
                    {text}
                  </a>
                </p>
              );
            })}
          </div>
        </div>
      </nav>
    </>
  );
}
