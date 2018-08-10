import React from "react";
import { Icon, DefaultButton, Facepile } from "office-ui-fabric-react";
import { Text, VerticalStack, HorizontalStack } from "@uifabric/experiments";
import {
  createTheme,
  DefaultPalette,
  ITheme,
  mergeStyleSets
} from "@uifabric/styling";
import { Customizer } from "@uifabric/utilities";
import { Chart } from "./Chart";
import { facepilePersonas } from "./facepilePersonas";

const mainTheme: ITheme = createTheme({
  palette: {
    themeDark: "red",
    themePrimary: "purple"
  },

  semanticColors: {
    inputForegroundChecked: DefaultPalette.red
  }
});

const sideBarTheme: ITheme = createTheme({
  semanticColors: {
    buttonBackground: DefaultPalette.neutralPrimary
  },
  palette: {
    themeSecondary: DefaultPalette.neutralPrimary
  }
});

export class BuildThisUI extends React.Component<any, any> {
  render() {
    const classNames = mergeStyleSets({
      sidebar: [
        {
          background: DefaultPalette.purple,
          width: 150
        }
      ]
    });

    const buttonStyles = {
      root: {
        background: DefaultPalette.purple,
        color: DefaultPalette.white,
        textAlign: "left"
      }
    };

    return (
      <>
        <HorizontalStack fillVertical>
          <Customizer settings={{ theme: sideBarTheme }}>
            <VerticalStack className={classNames.sidebar} fillVertical>
              <DefaultButton
                styles={buttonStyles}
                onRenderIcon={() => <Icon iconName="home" />}
              >
                Home
              </DefaultButton>
              <DefaultButton
                styles={buttonStyles}
                onRenderIcon={() => <Icon iconName="document" />}
              >
                New
              </DefaultButton>
              <DefaultButton
                styles={buttonStyles}
                onRenderIcon={() => <Icon iconName="OpenFolderHorizontal" />}
              >
                Open
              </DefaultButton>

              <hr />

              <DefaultButton styles={buttonStyles}>Info</DefaultButton>
              <DefaultButton styles={buttonStyles}>Save</DefaultButton>
              <DefaultButton styles={buttonStyles}>Home</DefaultButton>
              <DefaultButton styles={buttonStyles}>Home</DefaultButton>
              <DefaultButton styles={buttonStyles}>Home</DefaultButton>
            </VerticalStack>
          </Customizer>
          <Customizer settings={{ theme: mainTheme }}>
            <div>
              <Text variant="h1" color="themePrimary">
                Info dz
              </Text>

              <VerticalStack gap={25}>
                <Text variant="h1" color="themePrimary">
                  Info
                </Text>

                <VerticalStack>
                  <Text variant="h2">Collab Color Scheme</Text>
                  <Text variant="default">OneDrive > Marketing > Reports</Text>
                  <Text variant="default">
                    Managed by Word (corp.microsoft.com)
                  </Text>
                </VerticalStack>

                <VerticalStack>
                  <Text variant="h3">Document Views</Text>
                  <Text variant="default">1376 total views</Text>
                  <Text variant="default">96 total views</Text>
                </VerticalStack>

                <Chart />

                <Facepile personas={facepilePersonas} />
              </VerticalStack>
            </div>
          </Customizer>
        </HorizontalStack>
      </>
    );
  }
}
