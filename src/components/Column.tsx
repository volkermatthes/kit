import React, { FunctionComponent, HTMLAttributes } from 'react';
import styled from 'styled-components';

interface ColumnProps extends HTMLAttributes<HTMLDivElement> {
  size?: Number;
  order?: Number;
}

const StyledColumn = styled.div`
  box-sizing: border-box;
  -webkit-flex: 0 0 auto;
  -ms-flex: 0 0 auto;
  flex: 0 0 auto;
  -webkit-flex-grow: 1;
  -ms-flex-positive: 1;
  -webkit-box-flex: 1;
  flex-grow: 1;
  -ms-flex-preferred-size: calc(
    (100% / 12) * ${(props: { size: number }) => (props.size ? props.size : 12)}
  );
  -webkit-flex-basis: calc(
    (100% / 12) * ${(props: { size: number }) => (props.size ? props.size : 12)}
  );
  flex-basis: calc((100% / 12) * ${(props: { size: number }) => (props.size ? props.size : 12)});
  max-width: calc((100% / 12) * ${(props: { size: number }) => (props.size ? props.size : 12)});
  min-width: 0;
  padding: 0 var(--grid-gutter) 0 var(--grid-gutter);
  order: ${(props: { order: number }) => (props.order ? props.order : 'unset')};
  @media only screen and (max-width: 892px) {
    flex: 100%;
    max-width: 100%;
  }
`;

const Column: FunctionComponent<ColumnProps> = ({ children, ...rest }) => {
  return <StyledColumn {...rest}>{children}</StyledColumn>;
};

export default Column;
