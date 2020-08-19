import React, { FunctionComponent, HTMLAttributes, useContext } from 'react';
import styled, { css } from 'styled-components';
import ThemeContext from '../utils/themeProvider';

interface CodeProps extends HTMLAttributes<HTMLPreElement> {}

const StyledCode = styled.pre`
  font-size: 14px;
  width: 100%;
  display: block;
  background-color: ${(props: any) => props.theme.colors.secondary1};
  border-radius: ${(props: any) => props.theme.units.borderRadius};
  padding: ${(props: any) => props.theme.units.medium};
  color: ${(props: any) => props.theme.colors.black};
  font-weight: 400;
  white-space: break-spaces;
  line-height: 1.75rem;
`;

const Code: FunctionComponent<CodeProps> = ({ children, ...rest }) => {
  const theme = useContext(ThemeContext);
  return (
    <StyledCode theme={theme} {...rest}>
      <code>
        {children}
      </code>
    </StyledCode>
  );
};

export default Code;
