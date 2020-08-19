import React, { FunctionComponent, HTMLAttributes, useContext } from 'react';
import styled from 'styled-components';
import ThemeContext from '../utils/themeProvider';

interface ListItemProps extends HTMLAttributes<HTMLUListElement> {}

interface UnorderedListProps extends HTMLAttributes<HTMLDivElement> {
  Item: React.FC<ListItemProps>;
}

const StyledUlList = styled.ul``;

const UnorderedList: FunctionComponent<{}> & UnorderedListProps = ({ children, ...rest }) => {
  const theme = useContext(ThemeContext);
  return (
    <StyledUlList theme={theme} {...rest}>
      {children}
    </StyledUlList>
  );
};

const StyledListItem = styled.li`
  padding: ${(props: any) => props.theme.units.medium} 0;
  font-size: 14px;
`;

const Item: FunctionComponent<ListItemProps> = ({ children, ...rest }) => {
  const theme = useContext(ThemeContext);
  return (
    <StyledListItem theme={theme} {...rest}>
      {children}
    </StyledListItem>
  );
};

UnorderedList.displayName = 'UnorderedList';
UnorderedList.Item = Item;
UnorderedList.Item.displayName = 'UnorderedList.Item';

export default UnorderedList;
