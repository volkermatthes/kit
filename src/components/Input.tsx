import React, { FunctionComponent, HTMLAttributes } from 'react';
import styled from 'styled-components';

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
  font-weight: 500;
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
  color: var(--color-error3);
  margin-top: var(--units-small);
`;

const StyledInput = styled.input`
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
`;

const Input: FunctionComponent<InputProps> = ({
  children,
  label,
  className,
  helperText,
  invalidText,
  invalid,
  ...rest
}) => {
  return (
    <InputWrapper className={className}>
      <Label>{label}</Label>
      <StyledInput invalid {...rest}>
        {children}
      </StyledInput>
      {invalid ? <InvalidText>{invalidText}</InvalidText> : <HelperText>{helperText}</HelperText>}
    </InputWrapper>
  );
};

export default Input;
