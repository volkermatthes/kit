import React, { FunctionComponent, HTMLAttributes } from 'react';
import styled from 'styled-components';

export interface UnorderedListItemProps extends HTMLAttributes<HTMLUListElement> { }

export interface UnorderedListProps extends HTMLAttributes<HTMLDivElement> {
  Item: React.FC<UnorderedListItemProps>;
  children: React.ReactNode;
}

const StyledUlList = styled.ul``;

const UnorderedList: FunctionComponent<UnorderedListProps> & { Item?: React.FunctionComponent<UnorderedListItemProps> } = ({ children, ...rest }) => {
  return (
    <StyledUlList {...rest}>
      {children}
    </StyledUlList>
  );
};

const StyledListItem = styled.li``;

const Item: FunctionComponent<UnorderedListItemProps> = ({ children, ...rest }) => {
  return (
    <StyledListItem {...rest}>
      {children}
    </StyledListItem>
  );
};

UnorderedList.displayName = 'UnorderedList';
UnorderedList.Item = Item;
UnorderedList.Item.displayName = 'UnorderedList.Item';

export { UnorderedList };
