import React from "react";

export default function Header() {
  return (
    <nav className="header d-flex justify-content-center">
      <div className="container-lg row align-items-center text-center py-1">
        <div className="col-12 col-md-3 py-1 text-md-start">
          <i className="bi bi-calculator fs-1"></i>
        </div>

        <div className="col-12 col-md-6 py-1">
          <h1>Simple Calculator</h1>
        </div>

        <div className="col-12 col-md-3 py-1">
          <div className="row justify-content-center justify-content-md-end align-items-center">
            <input
              type="checkbox"
              className="switcher col-auto order-2"
              id="theme-switcher"
            />

            <label className="col-auto order-1" htmlFor="theme-switcher">
              <i className="sun bi bi-sun fs-4"></i>
            </label>

            <label className="col-auto order-3" htmlFor="theme-switcher">
              <i className="moon bi bi-moon fs-4"></i>
            </label>
          </div>
        </div>
      </div>
    </nav>
  );
}
