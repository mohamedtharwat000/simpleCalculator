import React from "react";
import Button from "./Button";
import calc from "./helperFunctions";

export default function Buttons(props) {
  const { calculatorData, setCalculatorData } = props;
  const changeScreenData = (e) => {
    e.preventDefault();
    calc(e, calculatorData, setCalculatorData);
  };
  const allButtonsArr = [
    "AC",
    "()",
    "%",
    "/",
    "7",
    "8",
    "9",
    "*",
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
    "x",
    "=",
  ];

  const allButtons = allButtonsArr.map((button, index) => {
    return (
      <Button
        key={index}
        value={button}
        type={button >= "0" && button <= "9" ? "operand" : "operator"}
        onClick={changeScreenData}
      />
    );
  });

  return (
    <div>
      <div className="buttons p-4 g-2 mx-auto row row-cols-4 justify-content-evenly border border-secondary">
        {allButtons}
      </div>
    </div>
  );
}
