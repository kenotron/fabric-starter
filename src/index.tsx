import React from "react";
import { render } from "react-dom";
import { BuildThisUI } from "./BuildThisUI";

const App = () => (
  <BuildThisUI />
);

render(<App />, document.getElementById("root"));
