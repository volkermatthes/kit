import React, { FunctionComponent, HTMLAttributes } from 'react';
import styled from 'styled-components';

interface CodeProps extends HTMLAttributes<HTMLPreElement> {}

const StyledCode = styled.pre`
  font-size: var(--font-size-base);
  width: 100%;
  display: block;
  background-color: var(--color-secondary1);
  border-radius: var(--border-radius);
  padding: var(--units-medium);
  color: var(--color-black);
  font-weight: 400;
  white-space: break-spaces;
  line-height: 1.75rem;
`;

const Code: FunctionComponent<CodeProps> = ({ children, ...rest }) => {
  return (
    <StyledCode {...rest}>
      <code>
        {children}
      </code>
    </StyledCode>
  );
};

export default Code;
