import React from "react";

export default function Button(props) {
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

  if (props.value === "PI") {
    return (
      <div className="fcenter">
        <button
          className="btn fs-2 rounded-5 border-secondary"
          value={Math.PI.toFixed(4)}
          type={props.type}
          onClick={props.onClick}
        >
          {props.value}
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
