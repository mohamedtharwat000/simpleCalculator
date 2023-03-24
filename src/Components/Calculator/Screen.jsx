import React from "react";

export default function Screen(props) {
  const {
    calculatorData: { operation, result, offsetLeft },
    setCalculatorData,
  } = props;

  const numberOnScreen = 12 - 1;

  let operationLastIndex =
    operation.length === 0 ? 0 : operation.length - 1 - offsetLeft;
  let operationFirstIndex =
    operation.length <= numberOnScreen
      ? 0
      : operationLastIndex - numberOnScreen;
  let operationMax = operation.slice(
    operationFirstIndex,
    operationLastIndex + 1
  );

  const goLeft = function () {
    if (operationFirstIndex > 0) {
      setCalculatorData((prev) => ({
        ...prev,
        offsetLeft: prev.offsetLeft + 1,
      }));
    }
  };

  const goRight = function () {
    if (operationLastIndex < operation.length - 1) {
      setCalculatorData((prev) => ({
        ...prev,
        offsetLeft: prev.offsetLeft - 1,
      }));
    }
  };

  return (
    <div>
      <div className="screen p-4 mx-auto row row-cols-1 fcenter text-end border border-secondary">
        <div className="row p-0">
          <div className="col-1 fcenter">
            <i
              className="bi bi-caret-left-fill"
              hidden={operation.length <= 12 && true}
              onClick={goLeft}
            ></i>
          </div>
          <output className="col" name="operation">
            {operationMax}
          </output>
          <div className="col-1 d-flex fcenter">
            <i
              className="bi bi-caret-right-fill"
              hidden={operation.length <= 12 && true}
              onClick={goRight}
            ></i>
          </div>
        </div>
        <output name="result">{result}</output>
      </div>
    </div>
  );
}
