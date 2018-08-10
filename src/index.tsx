import React from "react";
import { render } from "react-dom";
import { BuildThisUI } from "./BuildThisUI";
import { initializeIcons } from "@uifabric/icons";
import { createTheme } from "@uifabric/styling";
import { Customizer } from "../node_modules/@uifabric/utilities";

initializeIcons();

const App = () => {
  const theme = createTheme({});
  return <Customizer settings={{theme}}><BuildThisUI /></Customizer>
};

render(<App />, document.getElementById("root"));
