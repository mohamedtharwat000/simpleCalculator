import React from "react";
import Screen from "./Calculator/Screen";
import Buttons from "./Calculator/Buttons";

export default function Calculator() {
  const [calculatorData, setCalculatorData] = React.useState({
    operation: "",
    result: "",
    offsetLeft: 0,
  });

  return (
    <div className="calculator row row-cols-1 fcenter">
      <Screen
        calculatorData={calculatorData}
        setCalculatorData={setCalculatorData}
      />
      <Buttons
        calculatorData={calculatorData}
        setCalculatorData={setCalculatorData}
      />
    </div>
  );
}
