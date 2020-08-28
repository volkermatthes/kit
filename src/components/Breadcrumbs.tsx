import React, { FunctionComponent, HTMLAttributes } from 'react';
import styled, { css } from 'styled-components';

interface ItemProps extends HTMLAttributes<HTMLOListElement> {
  current?: boolean;
}

interface BreadcrumbsProps extends HTMLAttributes<HTMLOListElement> {
  Item: React.FC<ItemProps>;
}

const StyledBreadcrumbs = styled.ol`
  padding: 0;
  margin: 0;
  line-height: 1;
  color: var(--color-secondary3);
  font-size: var(--font-size-base);
`;

const Breadcrumbs: FunctionComponent<{}> & BreadcrumbsProps = ({ children, ...rest }) => {
  return <StyledBreadcrumbs {...rest}>{children}</StyledBreadcrumbs>;
};

const StyledBreadcrumb = styled.li`
  line-height: 1;
  color: var(--color-secondary3);
  text-decoration: underline;
  font-size: var(--font-size-base);
  display: inline-block;
  font-weight: 500;
  &:after {
    display: inline-block;
    content: '/';
    margin: 0 var(--units-small);
    text-decoration: none;
  }
  ${({ current }: ItemProps) =>
    current &&
    css`
      color: var(--color-black);
      text-decoration: none;
      &:after {
        display: none;
      }
    `}
`;

const Item: FunctionComponent<ItemProps> = ({ children, ...rest }) => {
  return <StyledBreadcrumb {...rest}>{children}</StyledBreadcrumb>;
};

Breadcrumbs.displayName = 'Breadcrumbs';
Breadcrumbs.Item = Item;
Breadcrumbs.Item.displayName = 'Breadcrumbs.Item';

export default Breadcrumbs;
