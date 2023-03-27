import React from "react";

export default function Button(props) {
  // custom button for parenthesis
  if (props.value === "()") {
    return (
      <div className="fcenter" style={{ gap: "5px" }}>
        <button
          className="btn fs-2 rounded-5 border-secondary"
          value={"("}
          type={props.type}
          onClick={props.onClick}
        >
          {"("}
        </button>
        <button
          className="btn fs-2 rounded-5 border-secondary"
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
    <div className="fcenter">
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
