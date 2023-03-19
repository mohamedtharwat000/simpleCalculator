import React from "react";

// importing components
import Header from "./Components/Header";
import Main from "./Components/Main";
import Footer from "./Components/Footer";

// importing bootstrap
import "./sass/bootstrap.scss";
import "./sass/bootstrap-icons.scss";
import "./js/bootstrap.js";

// importing custom css and js
import "./sass/style.scss";
import "./js/theme.js";

export default function App() {
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
}
