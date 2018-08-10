import * as React from 'react';
import { IToggleViewProps, IToggleStyles } from './Toggle.types';
import { Label } from 'office-ui-fabric-react';
import { IViewComponentProps } from '../Foundation';

export const ToggleView = (
  props: IViewComponentProps<IToggleViewProps, IToggleStyles>
) => {
  const {
    as: RootType = 'div',
    classNames,
    disabled,
    label,
    text
  } = props;

  return (
    <RootType className={classNames.root}>
      {label && (
        <Label className={classNames.label}>
          {label}
        </Label>
      )}

      <div className={classNames.container}>
          <button
            className={classNames.pill}
            disabled={disabled}
            onClick={props.onClick}
          >
            <div className={classNames.thumb} />
          </button>
        {text && <Label className={classNames.text}>{text}</Label>}
      </div>
    </RootType>
  );
}
