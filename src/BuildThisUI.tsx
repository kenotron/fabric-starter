import React from "react";
import { VerticalStack, HorizontalStack } from "@uifabric/experiments";
import { Chart } from "./Chart";
import {
  OverflowButtonType,
  Facepile,
  mergeStyleSets
} from "office-ui-fabric-react";
import { facepilePersonas } from "./facepilePersonas";
import { Text } from "./Text";

export class BuildThisUI extends React.Component<any, any> {
  render() {
    const classNames = getClassNames();

    return (
      <VerticalStack className={classNames.root}>
        <Text className={classNames.header}>Info</Text>

        <VerticalStack>
          <Text>Collab Color Scheme</Text>
          <HorizontalStack>
            <Text>OneDrive</Text>
            <Text>OneDrive</Text>
            <Text>OneDrive</Text>
          </HorizontalStack>
          <Text>Managed by Word (corp.microsoft.com)</Text>
        </VerticalStack>

        <Text>Document View</Text>
        <VerticalStack verticalAlign="space-between">
          <HorizontalStack>
            <Text>1376 totol</Text>
            <Text>96 total</Text>
          </HorizontalStack>

          <HorizontalStack>Last 7 days</HorizontalStack>
        </VerticalStack>

        <Chart />

        <VerticalStack>
          <Text>Consider Sharing with</Text>
          <Facepile
            personas={facepilePersonas}
            maxDisplayablePersonas={5}
            overflowButtonType={OverflowButtonType.downArrow}
            overflowButtonProps={{}}
          />
        </VerticalStack>
      </VerticalStack>
    );
  }
}

function getClassNames() {
  return mergeStyleSets({
    root: {
      fontFamily:
        '"Segoe UI Web (West European)","Segoe UI",-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif'
    },
    header: {
      fontSize: "1.1rem"
    }
  });
}
