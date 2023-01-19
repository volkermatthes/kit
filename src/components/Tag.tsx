import React, { HTMLAttributes, FunctionComponent } from 'react';
import styled from 'styled-components';

export interface TagProps extends HTMLAttributes<HTMLSpanElement> { }

const StyledTag = styled.span`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  color: var(--color-primary3);
  background-color: var(--color-primary1);
  text-transform: uppercase;
  height: var(--element-height-small);
  padding: 0 var(--units-medium);
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.5px;
  border-radius: var(--border-radius);
`;

const Tag: FunctionComponent<TagProps> = ({ children, ...rest }) => {
  return <StyledTag {...rest}>{children}</StyledTag>;
};

export { Tag };
