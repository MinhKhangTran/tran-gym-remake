import React from "react";

export default function Info() {
  return (
    <>
      <div className="w-screen flex flex-col items-center md:my-24 mt-8">
        <h1>Erreiche deine Ziele.</h1>
        <div
          className="bg-black md:w-1/3 w-2/3 mb-2"
          style={{ height: "2px" }}
        ></div>
        <p className="md:w-1/3 w-2/3 tracking-widest">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
          nulla architecto ipsam sint facere illum, quaerat quae dignissimos a
          corporis praesentium sapiente provident, maiores eaque!
        </p>
      </div>
    </>
  );
}
