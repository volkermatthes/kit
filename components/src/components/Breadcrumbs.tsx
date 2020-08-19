import React, { FunctionComponent, HTMLAttributes, useContext } from "react";
import styled, { css } from 'styled-components';
import ThemeContext from '../utils/themeProvider';

interface ItemProps extends HTMLAttributes<HTMLOListElement> {
    current?: boolean,
}


interface BreadcrumbsProps extends HTMLAttributes<HTMLOListElement> {
    Item: React.FC<ItemProps>;
}

const StyledBreadcrumbs = styled.ol`
    padding: 0;
    margin: 0;
    line-height: 1;
    color: ${(props: any) => props.theme.colors.secondary3};
    font-size: ${(props: any) => props.theme.fonts.baseFontSize};
`

const Breadcrumbs: FunctionComponent<{}> & BreadcrumbsProps = ({ children, ...rest }) => {
  const theme = useContext(ThemeContext);
  return (
    <StyledBreadcrumbs theme={theme} {...rest}>
        {children}
    </StyledBreadcrumbs>
  );
};

const StyledBreadcrumb = styled.li`
    line-height: 1;
    color: ${(props: any) => props.theme.colors.secondary3};
    text-decoration: underline;
    font-size: ${(props: any) => props.theme.fonts.baseFontSize};
    display: inline-block;
    &:after {
        display: inline-block;
        content: '/';
        margin: 0 ${(props: any) => props.theme.units.small};
        text-decoration: none;
    }
    ${({ current }: ItemProps) =>
        current && css`
            color: ${(props: any) => props.theme.colors.black};
            text-decoration: none;
            &:after {
                display: none;
            }
        `
    }
`

const Item: FunctionComponent<ItemProps> = ({ children, ...rest }) => {
    const theme = useContext(ThemeContext);
    return (
      <StyledBreadcrumb theme={theme} {...rest}>
          {children}
      </StyledBreadcrumb>
    );
  };

Breadcrumbs.displayName = 'Breadcrumbs'
Breadcrumbs.Item = Item;
Breadcrumbs.Item.displayName = 'Breadcrumbs.Item'

export default Breadcrumbs;