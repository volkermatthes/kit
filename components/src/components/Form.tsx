import React, { FunctionComponent, HTMLAttributes, useContext } from 'react';
import styled from 'styled-components';
import {Row, Column} from '../';
import ThemeContext from '../utils/themeProvider';

interface FormItemProps extends HTMLAttributes<HTMLDivElement> {}

interface FormProps extends HTMLAttributes<HTMLFormElement> {
  Item: React.FC<FormItemProps>;
}

const StyledRow = styled(Row)`
  margin-bottom: 16px;
`;

const StyledForm = styled.form`
  ${StyledRow} {
    &:last-child {
      margin-bottom: 0;
    }
  }
`;

const Form: FunctionComponent<{}> & FormProps = ({ children, ...rest }) => {
  const theme = useContext(ThemeContext);
  return (
    <StyledForm gutter={theme.grid.gutter} {...rest}>
      {children}
    </StyledForm>
  );
};

const Item: FunctionComponent<FormItemProps> = ({ children, ...rest }) => {
  const theme = useContext(ThemeContext);
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
