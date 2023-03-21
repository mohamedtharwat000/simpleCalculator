import React from "react";
import Screen from "./Calculator/Screen";
import Buttons from "./Calculator/Buttons";

export default function Calculator() {
  const [calculatorData, setCalculatorData] = React.useState({
    operation: "",
    result: "",
  });
  return (
    <div className="calculator row row-cols-1 justify-content-center align-items-center">
      <Screen calculatorData={calculatorData} />
      <Buttons
        calculatorData={calculatorData}
        setCalculatorData={setCalculatorData}
      />
    </div>
  );
}
