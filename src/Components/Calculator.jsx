import React from "react";
import Screen from "./Calculator/Screen";
import Buttons from "./Calculator/Buttons";
import History from "./Calculator/History";

export default function Calculator() {
  //
  //default state values
  const defaultState = {
    userOperation: "",
    jsOperation: "",
    result: "",
    offsetLeft: 0,
    history: {
      status: false,
      value: JSON.parse(localStorage.getItem("history")) ?? [],
    },
  };

  const [calculatorData, setCalculatorData] = React.useState({
    defaultState,
    ...defaultState,
  });

  console.log("calculator", calculatorData);

  return (
    <div className="calculator row row-cols-1 fcenter">
      <>
        {calculatorData.history.status ? (
          <History
            calculatorData={calculatorData}
            setCalculatorData={setCalculatorData}
          />
        ) : (
          <Screen
            calculatorData={calculatorData}
            setCalculatorData={setCalculatorData}
          />
        )}
        <Buttons
          calculatorData={calculatorData}
          setCalculatorData={setCalculatorData}
        />
      </>
    </div>
  );
}
