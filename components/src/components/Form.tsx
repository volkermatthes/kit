import React, { FunctionComponent, HTMLAttributes } from 'react';
import styled from 'styled-components';
import Row from './Row';
import Column from './Column';

interface FormItemProps extends HTMLAttributes<HTMLDivElement> {}

interface FormProps extends HTMLAttributes<HTMLFormElement> {
  Item: React.FC<FormItemProps>;
}

const StyledRow = styled(Row)`
  margin-bottom: var(--units-base);
`;

const StyledForm = styled.form`
  ${StyledRow} {
    &:last-child {
      margin-bottom: 0;
    }
  }
`;

const Form: FunctionComponent<{}> & FormProps = ({ children, ...rest }) => {
  return (
    <StyledForm {...rest}>
      {children}
    </StyledForm>
  );
};

const Item: FunctionComponent<FormItemProps> = ({ children, ...rest }) => {
  return (
    <StyledRow {...rest}>
      <Column size={12}>
        {children}
      </Column>
    </StyledRow>
  );
};

Form.displayName = 'Form'
Form.Item = Item;
Form.Item.displayName = 'Form.Item'

export default Form;
