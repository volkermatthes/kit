import React, { FunctionComponent, HTMLAttributes, useContext } from 'react';
import styled from 'styled-components';
import ThemeContext from '../utils/themeProvider';

interface ListItemProps extends HTMLAttributes<HTMLOListElement> {}

interface OrderedListProps extends HTMLAttributes<HTMLDivElement> {
  Item: React.FC<ListItemProps>;
}

const StyledOlList = styled.ol``;

const OrderedList: FunctionComponent<{}> & OrderedListProps = ({ children, ...rest }) => {
  const theme = useContext(ThemeContext);
  return (
    <StyledOlList theme={theme} {...rest}>
      {children}
    </StyledOlList>
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

OrderedList.displayName = 'OrderedList';
OrderedList.Item = Item;
OrderedList.Item.displayName = 'OrderedList.Item';

export default OrderedList;
