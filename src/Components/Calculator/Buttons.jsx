import React from "react";
import Button from "./Button";
import calc from "./helperFunctions";

export default function Buttons(props) {
  const { calculatorData, setCalculatorData } = props;

  // calc function handle all logic
  const changeScreenData = (e) => {
    calc(e, calculatorData, setCalculatorData);
  };

  const allButtonsArr = [
    "AC",
    "()",
    "\u03C0" /** Pi */,
    "H" /** history */,
    "\u221A" /** square */,
    "^" /** ** */,
    "%",
    "\u00F7" /** / */,
    "7",
    "8",
    "9",
    "\u00D7" /** * */,
    "4",
    "5",
    "6",
    "-",
    "1",
    "2",
    "3",
    "+",
    "0",
    ".",
    "\u2297" /** x */,
    "=",
  ];

  const allButtons = allButtonsArr.map((button, index) => {
    return (
      <Button
        key={index}
        value={button}
        type={
          (button >= "0" && button <= "9") ||
          button === "\u03C0" /* Pi */ ||
          button === "." ||
          button === "\u221A" /* squar2 */
            ? "operand"
            : "operator"
        }
        onClick={changeScreenData}
      />
    );
  });

  return (
    <div>
      <div className="buttons p-2 py-4 g-2 mx-auto row row-cols-4 justify-content-evenly border border-secondary">
        {allButtons}
      </div>
    </div>
  );
}
