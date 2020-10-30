import React from "react";

export default function Titel({ text, color }) {
  return (
    <div>
      <h1 className={`${color} md:text-2xl text-xl font-bold`}>{text}</h1>
    </div>
  );
}
