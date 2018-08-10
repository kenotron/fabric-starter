import React from 'react';

export const Text = (props: any) => {
  const {children, ...rest} = props;
  return <span {...rest}>{props.children}</span>;
}