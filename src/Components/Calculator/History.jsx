import React from "react";

export default function History(props) {
  const { calculatorData, setCalculatorData } = props;
  const history = calculatorData.history.value.map((operation, index) => {
    return (
      <div
        key={index}
        className="history__operations row m-0 row-cols-1 fs-1 border border-secondary"
      >
        <div className="my-2">{operation.userOperation}</div>
        <div className="my-2">{operation.finalResult}</div>
      </div>
    );
  });

  return (
    <div>
      <div className="history p-4 mx-auto row row-cols-1 g-2 mt-0 text-end border border-secondary overflow-auto">
        <span className="history__control fcenter justify-content-between">
          <span>History</span>
          <span
            onClick={() => {
              localStorage.removeItem("history");
              setCalculatorData((prev) => ({
                ...prev,
                history: {
                  ...prev.history,
                  value: [],
                },
              }));
            }}
            className="btn btn-outline"
          >
            X
          </span>
        </span>
        {history}
      </div>
    </div>
  );
}
