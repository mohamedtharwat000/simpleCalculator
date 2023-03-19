import React from "react";

export default function Screen(props) {
  const {
    calculatorData: { opration, result },
  } = props;
  const oprationLength = opration
    .split("")
    .reverse()
    .slice(0, 14)
    .reverse()
    .join("");
  return (
    <div>
      <div className="screen p-4 mx-auto row row-cols-1 align-items-center text-end fs-1 border border-secondary">
        <output name="opration">{oprationLength}</output>
        <output name="result">{result}</output>
      </div>
    </div>
  );
}
