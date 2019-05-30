import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";

const App = () => {
  return React.createElement("div", { id: "try" }, [
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pet, { name: "Lunar", animal: "Dog", breed: "Bichon" }),
    React.createElement(Pet, { name: "Grumpy", animal: "Cat", breed: "Mixed" }),
    React.createElement(Pet, { name: "Rain", animal: "Dog", breed: "Maltese" })
  ]);
};
render(React.createElement(App), document.getElementById("root"));
