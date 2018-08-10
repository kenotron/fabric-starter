import * as React from 'react';
import { IStyle } from '@uifabric/styling';
import { IRefObject, IComponentAs } from '@uifabric/utilities';
import { IStyleableComponent, IThemedProps } from '../Foundation';

export interface IToggle {
  focus: () => void;
}

/**
 * Toggle component props.
 */
export interface IToggleProps extends IStyleableComponent<IToggleProps, IToggleStyles> {
  /**
   * Render the root element as another type.
   */
  as?: IComponentAs<React.HTMLAttributes<HTMLElement>>;

  /**
   * Optional callback to access the IToggle interface. Use this instead of ref for accessing
   * the public methods and properties of the component.
   */
  componentRef?: IRefObject<IToggle>;

  /**
   * A label for the toggle.
   */
  label?: string;

  /**
   * Text to display when toggle is ON.
   */
  onText?: string;

  /**
   * Text to display when toggle is OFF.
   */
  offText?: string;

  /**
   * Text for screen-reader to announce as the name of the toggle.
   */
  ariaLabel?: string;

  /**
   * @deprecated Use ariaLabel for name, and let the metadata convey state
   */
  onAriaLabel?: string;

  /**
   * @deprecated Use ariaLabel for name, and let the metadata convey state
   */
  offAriaLabel?: string;

  /**
   * Checked state of the toggle. If you are maintaining state yourself, use this property. Otherwise refer to 'defaultChecked'.
   */
  checked?: boolean;

  /**
   * Initial state of the toggle. If you want the toggle to maintain its own state, use this. Otherwise refer to 'checked'.
   */
  defaultChecked?: boolean;

  /**
   * Optional disabled flag.
   */
  disabled?: boolean;

  /**
   * onchange callback.
   */
  onChanged?: (checked: boolean) => void;
}

export type IToggleViewProps = 
  Pick<IToggleProps, 'as' | 'checked' | 'disabled' | 'label'> & {
  /**
   * Text to display next to toggle.
   */
  text?: string;
  /**
   * Function to call when the card is clicked.
   */
  onClick?: (ev?: React.MouseEvent<HTMLElement>) => void;
  /**
   * Root element class name.
   */
  className?: string;
};

export type IToggleStyleProps = IThemedProps<IToggleViewProps>;

/**
 * Styles for the Toggle component.
 */
export interface IToggleStyles {
  /** Root element. */
  root: IStyle;

  /**
   * Label element above the toggle.
   */
  label: IStyle;

  /**
   * Container for the toggle pill and the text next to it.
   */
  container: IStyle;

  /**
   * Pill, rendered as a button.
   */
  pill: IStyle;

  /**
   * Thumb inside of the pill.
   */
  thumb: IStyle;

  /**
   * Text next to the pill.
   */
  text: IStyle;
}
