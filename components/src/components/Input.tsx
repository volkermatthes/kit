import React, { FunctionComponent, HTMLAttributes } from 'react';
import styled, { css } from 'styled-components';

interface InputProps extends HTMLAttributes<HTMLInputElement> {
  type?: 'text' | 'email' | 'password';
  label?: string;
  disabled?: boolean;
  helperText?: string;
  invalidText?: string;
  invalid?: boolean;
}

const InputWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`;

const Label = styled.div`
  width: 100%;
  display: flex;
  font-size: 14px;
  color: var(--color-black);
  margin-bottom: var(--units-small);
`;

const HelperText = styled.div`
  width: 100%;
  display: flex;
  font-size: 12px;
  color: var(--color-secondary3);
  margin-top: 4px;
`;

const InvalidText = styled.div`
  width: 100%;
  display: flex;
  font-size: 12px;
  color: var(--color-danger3);
  margin-top: var(--units-small);
`;

const StyledInput = styled.input`
  ${(props: any) =>
    css`
      border-radius: var(--border-radius);
      background-color: var(--color-secondary1);
      color: var(--color-black);
      height: var(--element-height-default);
      font-size: var(--font-size-base);
      width: 100%;
      display: flex;
      padding: 0 var(--units-medium);
      border: 2px solid transparent;
      outline: 0;
      &:hover {
        background-color: var(--color-secondary2);
      }
      &:focus {
        background-color: var(--color-white);
        border-color: var(--color-primary3);
      }
      &:invalid {
        border-color: var(--color-danger3);
      }
    `};
`;

const Input: FunctionComponent<InputProps> = ({
  children,
  label,
  helperText,
  invalidText,
  invalid,
  ...rest
}) => {
  return (
    <InputWrapper>
      <Label>{label}</Label>
      <StyledInput invalid {...rest}>
        {children}
      </StyledInput>
      {invalid ? <InvalidText>{invalidText}</InvalidText> : <HelperText>{helperText}</HelperText>}
    </InputWrapper>
  );
};

export default Input;
