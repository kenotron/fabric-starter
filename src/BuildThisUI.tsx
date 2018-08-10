import React from "react";
import { Toggle as ToggleOld } from "office-ui-fabric-react";
import { Text, VerticalStack } from "@uifabric/experiments";
import { createTheme, DefaultPalette, ITheme } from "@uifabric/styling";
import { Customizer } from "@uifabric/utilities";
import { Toggle as ToggleNew } from "./Toggle/Toggle";
import { IToggleStyleProps, IToggleStyles } from "./Toggle/Toggle.types";

function getCustomizerStyles(props: IToggleStyleProps): Partial<IToggleStyles> {
  const { theme } = props;
  return {
    text: { color: theme.semanticColors.link },
    pill: { background: theme.semanticColors.errorBackground }
  };
}

const csCustomizerTheme: ITheme = createTheme({
  semanticColors: {
    inputBackgroundChecked: DefaultPalette.redDark,
    inputForegroundChecked: DefaultPalette.red
  }
});

export class BuildThisUI extends React.Component<any, any> {
  render() {
    return (
      <>
        <VerticalStack>
          <Text variant="default">Check out these components, yo!</Text>
        </VerticalStack>
        <ToggleOld
          label="Old"
          onText="On"
          offText="Off"
          defaultChecked={true}
        />
        <ToggleNew
          label="New (State + View)"
          onText="On"
          offText="Off"
          defaultChecked={true}
        />
        <Customizer
          scopedSettings={{ Toggle: { styles: getCustomizerStyles } }}
        >
          <ToggleNew
            label="Customizer Styles"
            onText="On"
            offText="Off"
            defaultChecked={true}
          />
        </Customizer>
        <Customizer settings={{ theme: csCustomizerTheme }}>
          <ToggleNew
            label="Customizer Theme"
            onText="On"
            offText="Off"
            defaultChecked={true}
          />
        </Customizer>
      </>
    );
  }
}
