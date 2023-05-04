import React from "react";
import "./Cell.css";

/** A single cell on the board.
 *

 *
 * - isLit: boolean, is this cell lit?
 *
 * This handles clicks --- by calling flipCellsAroundMe
 *
 **/

function Cell({ flipCellsAroundMe, isLit = false }) {
  const classes = `Cell ${isLit ? "Cell-lit" : ""}`;
  return <td className={classes} onClick={flipCellsAroundMe} role="button" />;
}

export default Ce