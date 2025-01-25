import React from "react";
import { useState } from "react";

function Board({ value, onSquareClick }) {
  return (
    <button onClick={onSquareClick} className="square">
      {value}
    </button>
  );
}
export default Board;
