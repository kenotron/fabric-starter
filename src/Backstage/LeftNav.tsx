import React from 'react';
import { VerticalStack, HorizontalStack, Text } from '@uifabric/experiments';
import { mergeStyles, getTheme } from 'office-ui-fabric-react/lib/Styling';
import { Icon } from 'office-ui-fabric-react/lib/Icon';

const items = [
  {text: 'Home', icon: 'Home'},
  {text: 'New', icon: 'Document'},
  {text: 'Open', icon: 'OpenFolderHorizontal'}
];

const texts = [
  'Info',
  'Save',
  'Save a copy',
  'Print',
  'Export',
  'Close'
];

export class LeftNav extends React.Component<{}, {}> {
  public render(): JSX.Element {
    const styles = this._getStyles();

    return (
      <VerticalStack fillVertical grow padding="50px 0px 0px 0px" className={styles.root}>
        {items.map((item, index) => {
          return (
            <HorizontalStack key={index} verticalAlign="center" gap={10} padding="10px 0px 10px 20px" className={styles.item}>
              <Icon iconName={item.icon} />
              <Text family="default">{item.text}</Text>
            </HorizontalStack>
          );
        })}
        <HorizontalStack margin="10px 20px" className={styles.divider} />
        {texts.map((text, index) => {
          return (
            <HorizontalStack key={index} verticalAlign="center" gap={10} padding="10px 0px 10px 48px" className={styles.item}>
              <Text family="default">{text}</Text>
            </HorizontalStack>
          );
        })}
      </VerticalStack>
    );
  }

  private _getStyles() {
    const theme = getTheme();

    return {
      root: mergeStyles({
        background: theme.palette.themeDark,
        color: 'white'
      }),

      item: mergeStyles({
        cursor: 'pointer',
        selectors: {
          ':hover': {
            background: theme.palette.themeDarker
          }
        }
      }),

      divider: mergeStyles({
        height: 1,
        background: theme.palette.themeLight
      })
    };
  }
}