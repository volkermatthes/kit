import React, { HTMLAttributes, FunctionComponent, useContext } from 'react';
import styled from 'styled-components';
import ThemeContext from '../utils/themeProvider';

interface TagProps extends HTMLAttributes<HTMLSpanElement> {}

const StyledTag = styled.span`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  color: ${(props: any) => props.theme.colors.primary3};
  background-color: ${(props: any) => props.theme.colors.primary1};
  text-transform: uppercase;
  height: ${(props: any) => props.theme.elementHeight.small};
  padding: 0 ${(props: any) => props.theme.units.medium};
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.5px;
  border-radius: ${(props: any) => props.theme.units.borderRadius}
`;

const Tag: FunctionComponent<TagProps> = ({ children, ...rest }) => {
  const theme = useContext(ThemeContext);
  return (
    <StyledTag theme={theme} {...rest}>
      {children}
    </StyledTag>
  );
};

export default Tag;
