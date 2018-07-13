import * as React from "react";
import { render } from "react-dom";

import { PrimaryButton } from "office-ui-fabric-react";

const App = () => (
  <div>
    <PrimaryButton>Start here!</PrimaryButton>
  </div>
);

render(<App />, document.getElementById("root"));
