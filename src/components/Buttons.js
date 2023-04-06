import React from "react";

export const Buttons = ({ Children }) => {
  return (
    <button className="w-96 h-20 text-lg bg-gradient-to-r from-cyan-500 to-blue-500 rounded text-white mx-5">
      {Children}
    </button>
  );
};
