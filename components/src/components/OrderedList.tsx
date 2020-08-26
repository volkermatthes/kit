import React, { FunctionComponent, HTMLAttributes } from 'react';
import styled from 'styled-components';

interface ListItemProps extends HTMLAttributes<HTMLOListElement> {}

interface OrderedListProps extends HTMLAttributes<HTMLDivElement> {
  Item: React.FC<ListItemProps>;
}

const StyledOlList = styled.ol``;

const OrderedList: FunctionComponent<{}> & OrderedListProps = ({ children, ...rest }) => {
  return (
    <StyledOlList {...rest}>
      {children}
    </StyledOlList>
  );
};

const StyledListItem = styled.li`
  padding: var(--units-medium) 0;
  font-size: var(--font-size-base);
`;

const Item: FunctionComponent<ListItemProps> = ({ children, ...rest }) => {
  return (
    <StyledListItem {...rest}>
      {children}
    </StyledListItem>
  );
};

OrderedList.displayName = 'OrderedList';
OrderedList.Item = Item;
OrderedList.Item.displayName = 'OrderedList.Item';

export default OrderedList;
