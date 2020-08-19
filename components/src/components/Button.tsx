import React, { FunctionComponent, HTMLAttributes, useContext } from 'react';
import styled, { css } from 'styled-components';
import Loader from './Loader';
import ThemeContext from '../utils/themeProvider';

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  kind?: 'primary' | 'submit' | 'secondary' | 'danger' | 'ghost';
  size?: 'default' | 'field' | 'small';
  loading?: boolean;
}

const getTypeStyle = (kind: string, theme: any) => {
  if (kind === 'secondary') {
    return css`
      background-color: ${theme.colors.secondary1};
      &:disabled {
        color: ${theme.colors.secondary2};
      }
      &:not([disabled]) {
        color: ${theme.colors.black};
        &:hover,
        &:focus {
          background-color: ${theme.colors.secondary2};
        }
      }
      &.active,
      &:active {
        background-color: ${theme.colors.secondary3};
        color: ${theme.colors.white};
      }
    `;
  }
  if (kind === 'danger') {
    return css`
      background-color: ${theme.colors.danger1};
      &:disabled {
        color: ${theme.colors.danger2};
      }
      &:not([disabled]) {
        color: ${theme.colors.danger3};
        &:hover,
        &:focus {
          background-color: ${theme.colors.danger2};
        }
      }
      &.active,
      &:active {
        background-color: ${theme.colors.danger3};
        color: ${theme.colors.white};
      }
    `;
  }
  if (kind === 'ghost') {
    return css`
      background-color: ${theme.colors.transparent};
      &:disabled {
        color: ${theme.colors.secondary2};
      }
      &:not([disabled]) {
        color: ${theme.colors.black};
        &:hover,
        &:focus {
          background-color: ${theme.colors.secondary2};
        }
      }
      &.active,
      &:active {
        background-color: ${theme.colors.secondary3};
        color: ${theme.colors.white};
      }
    `;
  }
  return css`
    background-color: ${theme.colors.primary1};
    &:disabled {
      color: ${theme.colors.primary2};
    }
    &:not([disabled]) {
      color: ${theme.colors.primary3};
      &:hover,
      &:focus {
        background-color: ${theme.colors.primary2};
      }
    }
    &.active,
    &:active {
      background-color: ${theme.colors.primary3};
      color: ${theme.colors.white};
    }
  `;
};

const getSizeStyle = (size: any, theme: any) => {
  if (size === 'field') {
    return css`
      height: ${theme.elementHeight.field};
      padding: 0 8px;
      font-size: 14px;
    `;
  }
  if (size === 'small') {
    return css`
      height: ${theme.elementHeight.small};
      padding: 0 8px;
      font-size: 12px;
    `;
  }
  return css`
    height: ${theme.elementHeight.default};
    padding: 0 16px;
    font-size: 14px;
  `;
};

const StyledButton = styled.button`
  ${({ kind, size }: ButtonProps) =>
    css`
      display: inline-flex;
      font-weight: 700;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
      border: none;
      border-radius: ${(props: any) => props.theme.units.borderRadius};
      text-decoration: none;
      outline: 0;
      &:disabled {
        cursor: not-allowed;
      }
      ${(props: any) => getSizeStyle(size, props.theme)};
      ${(props: any) => getTypeStyle(kind, props.theme)};
    `}
`;

const Button: FunctionComponent<ButtonProps> = ({ children, loading, ...rest }) => {
  const theme = useContext(ThemeContext);
  return (
    <StyledButton theme={theme} {...rest}>
      {loading ? <Loader /> : children}
    </StyledButton>
  );
};

Button.defaultProps = {
  size: 'default',
  kind: 'primary',
  loading: false,
};

export default Button;
