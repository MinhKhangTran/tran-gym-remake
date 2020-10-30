import React from "react";
import { TiPlus, TiMinus } from "react-icons/ti";

const Question = ({ id, title, info, index }) => {
  const [qtoggle, setQtoggle] = React.useState(false);

  return (
    <div
      className="bg-gray-100 w-full rounded-lg md:w-1/2 mx-auto md:p-4 p-1 md:my-2 my-1 md:border-4 md:border-white "
      id={id}
    >
      <div className="flex justify-between">
        <h1 className="md:font-semibold">{title}</h1>
        <button
          className="w-8 h-8 bg-gray-400 flex justify-center items-center rounded-full hover:bg-gray-700 hover:text-white "
          onClick={() => setQtoggle(!qtoggle)}
          data-nummer={index}
        >
          {qtoggle ? <TiMinus></TiMinus> : <TiPlus></TiPlus>}
        </button>
      </div>
      <div>
        {qtoggle && (
          <p className="transition transition-all duration-300 ease-in-out">
            {info}
          </p>
        )}
      </div>
    </div>
  );
};

export default Question;
