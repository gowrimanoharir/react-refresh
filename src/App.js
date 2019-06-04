import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";

const App = () => {
  // return React.createElement("div", { id: "try" }, [
  //   React.createElement("h1", {}, "Adopt Me!"),
  //   React.createElement(Pet, { name: "Lunar", animal: "Dog", breed: "Bichon" }),
  //   React.createElement(Pet, { name: "Grumpy", animal: "Cat", breed: "Mixed" }),
  //   React.createElement(Pet, { name: "Rain", animal: "Dog", breed: "Maltese" })
  // ]);
  return (
    <div id="try">
      <h1>Adopt Me!</h1>
      <Pet name="Lunar" animal="Dog" breed="Bichon" />
      <Pet name="Grumpy" animal="Cat" breed="Mixed" />
      <Pet name="Rain" animal="Dog" breed="Maltese" />
    </div>
  );
};
render(<App />, document.getElementById("root"));
