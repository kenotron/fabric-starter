import React from 'react';
import { VerticalStack, HorizontalStack, Text } from '@uifabric/experiments';
import { mergeStyles, getTheme } from 'office-ui-fabric-react/lib/Styling';
import { 
  Icon, 
  ActionButton,
  Facepile, 
  OverflowButtonType, 
  PersonaSize, 
  PersonaInitialsColor,
  Dropdown
} from 'office-ui-fabric-react';
import { VerticalBarChart } from '@uifabric/charting';

export class MainSection extends React.Component<{}, {}> {
  public render(): JSX.Element {
    const styles = this._getStyles();
    const theme = getTheme();

    return (
      <VerticalStack fillVertical gap={30} grow={20} padding="40px 0px 0px 30px" className={styles.root}>
        <Text size="xxLarge" family="default">Info</Text>

        <VerticalStack gap={10}>
          <Text size="xLarge" family="default" color="themeDark">Collab Color Scheme</Text>
          <HorizontalStack gap={5}>
            <Text family="default">OneDrive</Text>
            <Text family="default">></Text>
            <Text family="default">Marketing</Text>
            <Text family="default">></Text>
            <Text family="default">Reports</Text>
          </HorizontalStack>
          <HorizontalStack gap={5}>
            <Icon iconName="Suitcase" />
            <Text family="default">Managed by Word (corp.microsoft.com)</Text>
          </HorizontalStack>
        </VerticalStack>

          <VerticalStack gap={10}>
            <Text family="default" weight="bold">Document views</Text>
            <HorizontalStack horizontalAlign="space-between" className={styles.viewCount}>
              <HorizontalStack gap={20}>
                <Text family="default">1376 total views</Text>
                <Text family="default">96 total views</Text>
              </HorizontalStack>
              <VerticalStack horizontalAlign="right" gap={10}>
                <Dropdown
                  options={[{text: 'Last 7 days', key: 0}]}
                  defaultSelectedKey={0}
                  styles={{
                    title: {
                      border: 'none',
                      background: 'transparent'
                    }
                  }}
                />
                <Text
                  family="default"
                  color="themeDark"
                  className={mergeStyles({cursor: 'pointer'})}
                >
                  How is this tracked?
                </Text>
              </VerticalStack>
            </HorizontalStack>
          </VerticalStack>

        <VerticalBarChart
          data={[
            {x: 'Sat', y: 8}, 
            {x: 'Sun', y: 6}, 
            {x: 'Mon', y: 10}, 
            {x: 'Tue', y: 9},
            {x: 'Wed', y: 7},
            {x: 'Thu', y: 8},
            {x: 'Fri', y: 9}
          ]}
          width={700}
          height={125}
          barWidth={30}
          yAxisTickCount={2}
          styles={{
            chart: {paddingLeft: 5},
            xAxisText: {fontSize: '12px', stroke: theme.palette.neutralSecondary, fontWeight: 'lighter', transform: 'translateY(5px)'},
            yAxisText: {fontSize: '12px', stroke: theme.palette.neutralSecondary, fontWeight: 'lighter'},
            xAxisTicks: {stroke: 'none'},
            yAxisTicks: {transform: 'scaleX(2) translateX(3px)'},
            xAxisDomain: {stroke: theme.palette.neutralSecondary},
            yAxisDomain: {stroke: theme.palette.neutralSecondary, transform: 'scaleX(1)'}
          }}
          colors={[theme.palette.themeDark, theme.palette.themeDark]}
        />

        <HorizontalStack verticalAlign="center" gap={15}>
          <HorizontalStack verticalAlign="center" gap={5}>
            <Text family="default">Consider sharing with</Text>
            <Facepile 
              personas={[
                {imageInitials: "AJ"},
                {imageInitials: "KL", initialsColor: PersonaInitialsColor.purple},
                {imageInitials: "ED", initialsColor: PersonaInitialsColor.green},
                {imageInitials: "XX"},
                {imageInitials: "XX"}
              ]}
              maxDisplayablePersonas={3}
              overflowButtonType={OverflowButtonType.descriptive}
              overflowButtonProps={{
                ariaLabel: 'More users'
              }}
              personaSize={PersonaSize.size24}
              styles={{
                descriptiveOverflowButton: {
                  background: `${theme.palette.white} !important`,
                  border: `1px solid ${theme.palette.neutralTertiaryAlt} !important`
                },
                overflowInitialsIcon: {
                  color: `${theme.palette.themeDark} !important`
                }
              }}
            />
          </HorizontalStack>
          <ActionButton
            iconProps={{ iconName: 'Share' }}
            styles={{
              root: {
                color: theme.palette.themeDark,
                background: theme.palette.white,
                padding: '5px',
                height: 'auto',
                border: `1px solid ${theme.palette.neutralTertiaryAlt}`
              }
            }}
          >
            <Text family="default" weight="bold">Share</Text>
          </ActionButton>
        </HorizontalStack>
      </VerticalStack>
    );
  }

  private _getStyles() {
    const theme = getTheme();

    return {
      root: mergeStyles({
        background: theme.palette.neutralLight
      }),
      viewCount: mergeStyles({
        width: 725
      })
    };
  }
}