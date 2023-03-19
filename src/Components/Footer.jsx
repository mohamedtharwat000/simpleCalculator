import React from "react";

export default function Footer() {
  return (
    <div
      className="footer d-flex justify-content-center
      align-items-center text-center fs-5 py-1"
    >
      <div className="container-lg">
        made with <i className="love bi bi-heart-fill text-danger"></i> by{" "}
        <a
          className="account"
          href="https://www.linkedin.com/in/mohamedtharwat000/"
        >
          Mohamed Tharwat
        </a>
      </div>
    </div>
  );
}
