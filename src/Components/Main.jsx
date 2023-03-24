import React from "react";
import Calculator from "./Calculator";

export default function Main() {
  // const [mainHeight, setMainHeight] = React.useState("");
  // React.useEffect(() => {
  //   const h =
  //     window.innerHeight -
  //     (document.querySelector(".header").offsetHeight +
  //       document.querySelector(".footer").offsetHeight);
  //   setMainHeight(h);
  // }, []);

  return (
    <div className="main d-flex fcenter py-4">
      <div className="container-lg">
        <Calculator />
      </div>
    </div>
  );
}
