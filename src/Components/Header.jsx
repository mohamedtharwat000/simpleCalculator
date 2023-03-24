import React from "react";

export default function Header() {
  function jsTheme() {
    // global variables
    const storedTheme = localStorage.getItem("theme");
    const rootDataset = document.documentElement.dataset;
    const darkThemeSupport = window.matchMedia("(prefers-color-scheme: dark)");
    const switchThemeButton = document.getElementById("theme-switcher");

    // function to define user theme based on dark mode support
    const setCustomTheme = function () {
      rootDataset.theme = darkThemeSupport.matches ? "dark" : "light";
    };

    // function to (check|uncheck) the theme switcher
    const checkThemeButton = function () {
      switchThemeButton.checked = rootDataset.theme === "dark" ? true : false;
    };

    // function to define bootstrap theme based on user theme
    const bootstrapTheme = function () {
      rootDataset.bsTheme = rootDataset.theme;
    };

    if (storedTheme) {
      rootDataset.theme = storedTheme;
      checkThemeButton();
      bootstrapTheme();
    } else {
      setCustomTheme();
      checkThemeButton();
      bootstrapTheme();
    }

    // is user change the os or browser theme
    darkThemeSupport.onchange = function () {
      jsTheme();
      darkThemeSupport.onchange = null;
    };
  }

  // is user change theme with theme switcher
  const switchTheme = function (e) {
    const rootDataset = document.documentElement.dataset;
    rootDataset.theme = rootDataset.theme === "light" ? "dark" : "light";
    rootDataset.bsTheme = rootDataset.theme;
    localStorage.setItem("theme", rootDataset.theme);
  };

  React.useEffect(() => {
    jsTheme();
  });

  return (
    <nav className="header fcenter">
      <div className="container-lg row fcenter py-1">
        <div className="col-12 col-md-3 py-1 text-center ">
          <i className="bi bi-calculator fs-1"></i>
        </div>

        <div className="col-12 col-md-6 py-1 fcenter">
          <h1>Simple Calculator</h1>
        </div>

        <div className="col-12 col-md-3 py-1">
          <div className="row fcenter">
            <input
              type="checkbox"
              className="switcher col-auto order-2"
              id="theme-switcher"
              onChange={switchTheme}
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
