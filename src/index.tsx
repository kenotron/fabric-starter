import React from "react";
import { render } from "react-dom";
import { BuildThisUI } from "./BuildThisUI";
import { initializeIcons } from "@uifabric/icons";
import { createTheme } from "@uifabric/styling";
import { Customizer } from "../node_modules/@uifabric/utilities";
import "./index.css";

initializeIcons();

const App = () => {
  return (
    <BuildThisUI />
  );
};

render(<App />, document.getElementById("root"));
