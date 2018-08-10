import { IToggleProps, IToggleViewProps } from './Toggle.types';
import { BaseStateComponent, IBaseStateComponentProps, IStateTransforms } from '../utilities/BaseState';

export type ICollapsibleSectionStateProps = IBaseStateComponentProps<
  IToggleProps,
  IToggleViewProps
>;

const IToggleStateTransforms: IStateTransforms<IToggleProps, IToggleViewProps> = [
  {
    transform: 'toggle',
    prop: 'checked',
    defaultValueProp: 'defaultChecked',
    defaultValue: false,
    onInput: 'onClick'
  }
];

export class ToggleState extends BaseStateComponent<IToggleProps, IToggleViewProps> {
  constructor(props: IBaseStateComponentProps<IToggleProps, IToggleViewProps>) {
    super(props, IToggleStateTransforms);
  }

  public render(): JSX.Element {
    const { offText, onText } = this.props;
    const viewProps = {
      ...this.getTransformProps(),
      text: this.getTransformProps().checked ? onText : offText
    } as IToggleViewProps;

    return this.props.renderView(viewProps);
  }
}
