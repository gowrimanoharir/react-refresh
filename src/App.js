import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";
import SearchParams from "./SearchParama";

const App = () => {
  return (
    <React.StrictMode>
      <div id="try">
        <h1>Adopt Me!</h1>
        <SearchParams />
        {/* <Pet name="Lunar" animal="Dog" breed="Bichon" />
        <Pet name="Grumpy" animal="Cat" breed="Mixed" />
        <Pet name="Rain" animal="Dog" breed="Maltese" /> */}
      </div>
    </React.StrictMode>
  );
};
render(<App />, document.getElementById("root"));
