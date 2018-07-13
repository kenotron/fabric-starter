import React from "react";
import { PrimaryButton } from "office-ui-fabric-react";

interface Props {
  name: string;
}

export default ({ name }: Props) => (
  <div>
    <PrimaryButton>{name}</PrimaryButton>
  </div>
);
