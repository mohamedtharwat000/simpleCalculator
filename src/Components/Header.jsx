import React from "react";

export default function Header() {
  function jsTheme() {
    // global variables
    const themeStored = localStorage.getItem("theme");
    const rootDataset = document.documentElement.dataset;
    const darkTheme = window.matchMedia("(prefers-color-scheme: dark)");
    const themeSwitcher = document.getElementById("theme-switcher");

    // function to define user theme based on dark mode support
    const customTheme = function () {
      rootDataset.theme = darkTheme.matches ? "dark" : "light";
    };

    // function to (check|uncheck) the theme switcher
    const themeSwitcherCheck = function () {
      themeSwitcher.checked = rootDataset.theme === "dark" ? true : false;
    };

    // function to define bootstrap theme based on user theme
    const bootstrapTheme = function () {
      rootDataset.bsTheme = rootDataset.theme;
    };

    if (themeStored) {
      rootDataset.theme = themeStored;
      themeSwitcherCheck();
      bootstrapTheme();
    } else {
      customTheme();
      themeSwitcherCheck();
      bootstrapTheme();
    }

    // is user change the os or browser theme
    darkTheme.onchange = function () {
      jsTheme();
      darkTheme.onchange = function () {};
    };
  }

  // is user change theme with theme switcher
  const themeSwitcher = function (e) {
    const rootDataset = document.documentElement.dataset;

    rootDataset.theme = rootDataset.theme === "light" ? "dark" : "light";
    rootDataset.bsTheme = rootDataset.theme;
    // localStorage.setItem("theme", rootDataset.theme);
  };

  React.useEffect(() => {
    jsTheme();
  });

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
              onChange={themeSwitcher}
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
