import React from "react";

// importing components
import Header from "./Components/Header";
import Main from "./Components/Main";
import Footer from "./Components/Footer";

// importing bootstrap
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/js/bootstrap.bundle.js";

// importing custom css
import "./sass/style.scss";

export default function App() {
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
}
