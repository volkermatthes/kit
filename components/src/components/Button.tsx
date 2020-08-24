import React, { FunctionComponent, HTMLAttributes } from 'react';
import styled, { css } from 'styled-components';
import Loader from './Loader';

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  kind?: 'primary' | 'submit' | 'secondary' | 'danger' | 'ghost';
  size?: 'default' | 'field' | 'small';
  loading?: boolean;
}

const getTypeStyle = (kind: string) => {
  if (kind === 'secondary') {
    return css`
      background-color: var(--color-secondary1);
      &:disabled {
        color: var(--color-secondary2);
      }
      &:not([disabled]) {
        color: var(--color-black);
        &:hover,
        &:focus {
          background-color: var(--color-secondary2);
        }
      }
      &.active,
      &:active {
        background-color: var(--color-secondary3);
        color: var(--color-white);
      }
    `;
  }
  if (kind === 'danger') {
    return css`
      background-color: var(--color-danger1);
      &:disabled {
        color: var(--color-danger2);
      }
      &:not([disabled]) {
        color: var(--color-danger3);
        &:hover,
        &:focus {
          background-color: var(--color-danger2);
        }
      }
      &.active,
      &:active {
        background-color: var(--color-danger3);
        color: var(--color-white);
      }
    `;
  }
  if (kind === 'ghost') {
    return css`
      background-color: var(--color-transparent);
      &:disabled {
        color: var(--color-secondary2);
      }
      &:not([disabled]) {
        color: var(--color-black);
        &:hover,
        &:focus {
          background-color: var(--color-secondary2);
        }
      }
      &.active,
      &:active {
        background-color: var(--color-secondary3);
        color: var(--color-white);
      }
    `;
  }
  return css`
    background-color: var(--color-primary1);
    &:disabled {
      color: var(--color-primary2);
    }
    &:not([disabled]) {
      color: var(--color-primary3);
      &:hover,
      &:focus {
        background-color: var(--color-primary2);
      }
    }
    &.active,
    &:active {
      background-color: var(--color-primary3);
      color: var(--color-white);
    }
  `;
};

const getSizeStyle = (size: any) => {
  if (size === 'field') {
    return css`
      height: var(--element-height-field);
      padding: 0 8px;
      font-size: 14px;
    `;
  }
  if (size === 'small') {
    return css`
      height: var(--element-height-small);
      padding: 0 8px;
      font-size: 12px;
    `;
  }
  return css`
    height: var(--element-height-default);
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
      border-radius: var(--border-radius);
      text-decoration: none;
      outline: 0;
      &:disabled {
        cursor: not-allowed;
      }
      ${(props: any) => getSizeStyle(size)};
      ${(props: any) => getTypeStyle(kind)};
    `}
`;

const Button: FunctionComponent<ButtonProps> = ({ children, loading, ...rest }) => {
  return (
    <StyledButton {...rest}>
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
