import * as React from 'react';
import { ToggleView } from './Toggle.view';
import { ToggleState } from './Toggle.state';
import { ToggleStyles } from './Toggle.styles';
import { IToggleProps, IToggleViewProps, IToggleStyles } from './Toggle.types';
import { createComponent } from '../Foundation';

export const Toggle: React.StatelessComponent<IToggleProps> = createComponent<
  IToggleProps,
  IToggleViewProps,
  IToggleStyles
>(
  {
    displayName: 'Toggle',
    view: ToggleView,
    styles: ToggleStyles
  },
  ToggleState
);
