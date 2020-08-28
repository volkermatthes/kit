import React, { HTMLAttributes, FunctionComponent } from 'react';
import styled from 'styled-components';

interface DividerProps extends HTMLAttributes<HTMLDivElement> {}

const StyledDivider = styled.span`
  display: flex;
  clear: both;
  width: 100%;
  min-width: 100%;
  margin: var(--units-base) 0;
  background-color: var(--color-secondary1);
  height: 1px;
`;

const Divider: FunctionComponent<DividerProps> = ({ ...rest }) => {
  return <StyledDivider {...rest} />;
};

export default Divider;
