import React, { FunctionComponent, HTMLAttributes } from 'react';
import styled from 'styled-components';
import { Grid } from './Grid';

export interface FormItemProps extends HTMLAttributes<HTMLDivElement> {}

export interface FormProps extends HTMLAttributes<HTMLFormElement> {
  Item: React.FC<FormItemProps>;
  children: React.ReactNode;
}

const StyledRow = styled(Grid.Row)`
  margin-bottom: var(--units-base);
`;

const StyledForm = styled.form`
  ${StyledRow} {
    &:last-child {
      margin-bottom: 0;
    }
  }
`;

const Form: FunctionComponent<FormProps> & { Item?: React.FunctionComponent<FormItemProps> } = ({
  children,
  ...rest
}) => {
  return <StyledForm {...rest}>{children}</StyledForm>;
};

const Item: FunctionComponent<FormItemProps> = ({ children, ...rest }) => {
  return (
    <StyledRow {...rest}>
      <Grid.Column size={12}>{children}</Grid.Column>
    </StyledRow>
  );
};

Form.displayName = 'Form';
Form.Item = Item;
Form.Item.displayName = 'Form.Item';

export { Form };
