import React from "react";

export default function Member({
  id,
  image,
  name,
  quote,
  title,
  index,
  member,
  value,
}) {
  let position = "translate-x-full";
  if (value === index) {
    position = "translate-x-0";
  }
  if (index === value - 1 || (index === 0 && index === member.length - 1)) {
    position = "-translate-x-full";
  }
  return (
    <article>
      <div
        className={`transform ${position} transition transition-all duration-700 ease-in-out flex flex-col items-center border mt-8 shadow-lg absolute p-2 mb:p-16 rounded`}
      >
        <img
          src={image}
          alt={name}
          style={{ width: "250px", height: "250px" }}
        />
        <h1 className="capitalize font-bold text-xl text-gray-700">{name}</h1>
        <h1 className="uppercase">{title}</h1>
        <h1 className="tracking-wider">{quote}</h1>
      </div>
    </article>
  );
}
