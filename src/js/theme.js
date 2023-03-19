window.onload = jsTheme;

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

  // main function excuted after page load
  setTheme();
  function setTheme() {
    // check local storage if theme is stored
    if (themeStored) {
      rootDataset.theme = themeStored;
      themeSwitcherCheck();
      bootstrapTheme();
    } else {
      customTheme();
      themeSwitcherCheck();
      bootstrapTheme();
    }
  }

  // is user change the os or browser theme
  darkTheme.onchange = function () {
    setTheme();
  };

  // is user change theme with theme switcher
  themeSwitcher.onclick = function () {
    rootDataset.theme = rootDataset.theme === "light" ? "dark" : "light";
    themeSwitcherCheck();
    bootstrapTheme();
    localStorage.setItem("theme", rootDataset.theme);
  };
}
