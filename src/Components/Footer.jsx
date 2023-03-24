import React from "react";

export default function Footer() {
  return (
    <div className="footer fcenter text-center fs-5 py-1">
      <div className="container-lg">
        <span>made with </span>
        <i className="love bi bi-heart-fill text-danger"></i>
        <span> by</span>
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
