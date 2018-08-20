import React from "react";
import { render } from "react-dom";
// import { BuildThisUI } from "./BuildThisUI";
import { Backstage } from './Backstage/Backstage';
import './index.css';

const App = () => (
  // <BuildThisUI />
  <Backstage />
);

render(<App />, document.getElementById("root"));
