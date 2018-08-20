import React from 'react';
import { HorizontalStack } from '@uifabric/experiments';
import { LeftNav } from './LeftNav';
import { MainSection } from './MainSection';
import { initializeIcons } from 'office-ui-fabric-react/lib/Icons';
import { loadTheme, createTheme } from 'office-ui-fabric-react/lib/Styling';
import { Customizer } from 'office-ui-fabric-react';

initializeIcons();

const customTheme = createTheme({
  typography: {
    families: {
      default: 'Segoe UI'
    },
    variants: {
      h1: {
        fontFamily: 'default',  
        color: 'themePrimary' 
      }
    }
  },
  palette: {
    themeDark: '#2b579a'
    // themeDark: '#ff0000'
  }
});

loadTheme(customTheme);

export class Backstage extends React.Component<{}, {}> {
  public render(): JSX.Element {
    return (
      <Customizer settings={{theme: customTheme}}>
        <HorizontalStack fillVertical>
          <LeftNav />
          <MainSection />
        </HorizontalStack>
      </Customizer>
    );
  }
}