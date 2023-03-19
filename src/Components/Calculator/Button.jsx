import React from "react";

export default function Button(props) {
  if (props.value === "()") {
    return (
      <div className="d-flex row-cols-2">
        <div className="d-flex justify-content-center align-items-center">
          <button
            className="btn rounded-pill fs-2 w-100"
            value={"("}
            type={props.type}
            onClick={props.onClick}
          >
            {"("}
          </button>
        </div>
        <div className="d-flex justify-content-center align-items-center">
          <button
            className="btn rounded-pill fs-2 w-100"
            value={")"}
            type={props.type}
            onClick={props.onClick}
          >
            {")"}
          </button>
        </div>
      </div>
    );
  }
  return (
    <div className="d-flex justify-content-center align-items-center">
      <button
        className="btn rounded-pill fs-2"
        value={props.value}
        type={props.type}
        onClick={props.onClick}
      >
        {props.value}
      </button>
    </div>
  );
}
