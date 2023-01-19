import React, { FunctionComponent, HTMLAttributes } from 'react';
import styled from 'styled-components';

export interface OrderedListItemProps extends HTMLAttributes<HTMLOListElement> {}

export interface OrderedListProps extends HTMLAttributes<HTMLDivElement> {
  Item: React.FC<OrderedListItemProps>;
  children: React.ReactNode;
}

const StyledOlList = styled.ol``;

const OrderedList: FunctionComponent<OrderedListProps> & {
  Item?: React.FunctionComponent<OrderedListItemProps>;
} = ({ children, ...rest }) => {
  return <StyledOlList {...rest}>{children}</StyledOlList>;
};

const StyledListItem = styled.li``;

const Item: FunctionComponent<OrderedListItemProps> = ({ children, ...rest }) => {
  return <StyledListItem {...rest}>{children}</StyledListItem>;
};

OrderedList.displayName = 'OrderedList';
OrderedList.Item = Item;
OrderedList.Item.displayName = 'OrderedList.Item';

export { OrderedList };
