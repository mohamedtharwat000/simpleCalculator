import React from "react";

export default function Screen(props) {
  const {
    calculatorData: { opration, result },
  } = props;
  return (
    <div>
      <div className="screen py-4 mx-auto row row-cols-1 align-items-center text-end fs-1 border border-secondary">
        <output name="opration">{opration}</output>
        <output name="result">{result}</output>
      </div>
    </div>
  );
}
