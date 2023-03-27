import React from "react";

export default function History(props) {
  const { calculatorData, setCalculatorData } = props;
  console.log("history", calculatorData);
  const history = calculatorData.history.value.map((operation, index) => {
    return (
      <div
        key={index}
        className="history__operations mx-auto row row-cols-1 g-2 fs-2 border border-secondary overflow-auto"
      >
        <div className="my-2">{operation.userOperation}</div>
        <div className="my-2">{operation.finalResult}</div>
      </div>
    );
  });

  return (
    <div>
      <div className="history p-4 mt-0 mx-auto row row-cols-1 g-2 text-end border border-secondary overflow-auto">
        <div className="history__control mb-2 fs-2 fcenter justify-content-between">
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
            className="btn btn-outline-secondary"
          >
            X
          </span>
        </div>
        {history}
      </div>
    </div>
  );
}
