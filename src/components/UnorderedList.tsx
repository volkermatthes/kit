import React, { FunctionComponent, HTMLAttributes } from 'react';
import styled from 'styled-components';

interface ListItemProps extends HTMLAttributes<HTMLUListElement> {}

interface UnorderedListProps extends HTMLAttributes<HTMLDivElement> {
  Item: React.FC<ListItemProps>;
}

const StyledUlList = styled.ul``;

const UnorderedList: FunctionComponent<{}> & UnorderedListProps = ({ children, ...rest }) => {
  return (
    <StyledUlList {...rest}>
      {children}
    </StyledUlList>
  );
};

const StyledListItem = styled.li``;

const Item: FunctionComponent<ListItemProps> = ({ children, ...rest }) => {
  return (
    <StyledListItem {...rest}>
      {children}
    </StyledListItem>
  );
};

UnorderedList.displayName = 'UnorderedList';
UnorderedList.Item = Item;
UnorderedList.Item.displayName = 'UnorderedList.Item';

export default UnorderedList;
