import React from "react";

export default function Screen(props) {
  const {
    calculatorData: { userOperation, result, offsetLeft },
    setCalculatorData,
  } = props;

  const numberOnScreen = 12;

  let userOperationLastIndex =
    userOperation.length === 0 ? 0 : userOperation.length - 1 - offsetLeft;
  let userOperationFirstIndex =
    userOperation.length <= numberOnScreen
      ? 0
      : userOperationLastIndex - numberOnScreen;
  let userOperationMax = userOperation.slice(
    userOperationFirstIndex,
    userOperationLastIndex + 1
  );

  const goLeft = function () {
    if (userOperationFirstIndex > 0) {
      setCalculatorData((prev) => ({
        ...prev,
        offsetLeft: prev.offsetLeft + 1,
      }));
    }
  };

  const goRight = function () {
    if (userOperationLastIndex < userOperation.length - 1) {
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
              hidden={userOperation.length <= 12 && true}
              onClick={goLeft}
            ></i>
          </div>
          <output className="col" name="userOperation">
            {userOperationMax}
          </output>
          <div className="col-1 d-flex fcenter">
            <i
              className="bi bi-caret-right-fill"
              hidden={userOperation.length <= 12 && true}
              onClick={goRight}
            ></i>
          </div>
        </div>
        <output name="result">{result}</output>
      </div>
    </div>
  );
}
