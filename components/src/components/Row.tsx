import React, { FunctionComponent, HTMLAttributes } from 'react';
import styled from 'styled-components';

interface RowProps extends HTMLAttributes<HTMLDivElement> {
  align?: 'top' | 'center' | 'bottom';
}

const StyledRow = styled.div`
  box-sizing: border-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: -webkit-box;
  display: flex;
  -webkit-flex: 0 1 auto;
  -ms-flex: 0 1 auto;
  -webkit-box-flex: 0;
  flex: 0 1 auto;
  -webkit-flex-direction: row;
  -ms-flex-direction: row;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  flex-direction: row;
  -webkit-flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  margin: 0 -var(--grid-gutter) 0 -var(--grid-gutter);
  align-items: ${(props: { align: string }) => (props.align ? props.align : 'unset')};
`;

const Row: FunctionComponent<RowProps> = ({ children, ...rest }) => {
  return <StyledRow {...rest}>{children}</StyledRow>;
};

export default Row;
