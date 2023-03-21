import React from "react";

export default function Button(props) {
  if (props.value === "()") {
    return (
      <div className="d-flex justify-content-between align-items-center">
        <button
          className="btn fs-2 rounded-5 border-secondary me-1"
          value={"("}
          type={props.type}
          onClick={props.onClick}
        >
          {"("}
        </button>
        <button
          className="btn fs-2 rounded-5 border-secondary ms-1"
          value={")"}
          type={props.type}
          onClick={props.onClick}
        >
          {")"}
        </button>
      </div>
    );
  }
  return (
    <div className="d-flex justify-content-center align-items-center">
      <button
        className="btn fs-2 rounded-5 border-secondary"
        value={props.value}
        type={props.type}
        onClick={props.onClick}
      >
        {props.value}
      </button>
    </div>
  );
}
