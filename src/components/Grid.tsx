import React, { FunctionComponent, HTMLAttributes } from 'react';
import styled from 'styled-components';

export interface RowProps extends HTMLAttributes<HTMLDivElement> {
  align?: 'top' | 'center' | 'bottom';
}

export interface ColumnProps extends HTMLAttributes<HTMLDivElement> {
  size?: Number;
  order?: Number;
}

export interface GridProps extends HTMLAttributes<HTMLDivElement> {
  Row: React.FC<RowProps>;
  Column: React.FC<ColumnProps>;
  width?: string;
  children: React.ReactNode;
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
  margin: 0 calc(-1 * var(--grid-gutter)) 0 calc(-1 * var(--grid-gutter));
  align-items: ${(props: { align: string }) => (props.align ? props.align : 'unset')};
`;

const StyledGrid = styled.div<GridProps>`
  width: 100%;
  @media (min-width: 892px) {
    width: ${({ width }: GridProps): string => (width ? width : 'var(--container-width)')}};
  }
`;

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

export interface RowProps extends HTMLAttributes<HTMLDivElement> {}

const Grid: FunctionComponent<GridProps> & {
  Row?: React.FunctionComponent<RowProps>;
  Column?: React.FunctionComponent<ColumnProps>;
} = ({ children, ...rest }) => {
  return <StyledGrid {...rest}>{children}</StyledGrid>;
};

const Row: FunctionComponent<RowProps> = ({ children, ...rest }) => {
  return <StyledRow {...rest}>{children}</StyledRow>;
};

const Column: FunctionComponent<ColumnProps> = ({ children, ...rest }) => {
  return <StyledColumn {...rest}>{children}</StyledColumn>;
};

Grid.displayName = 'Grid';
Grid.Row = Row;
Grid.Row.displayName = 'Grid.Row';
Grid.Column = Column;
Grid.Column.displayName = 'Grid.Column';

export { Grid };
