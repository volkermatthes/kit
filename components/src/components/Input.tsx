import React, { FunctionComponent, HTMLAttributes, useContext } from 'react';
import styled, { css } from 'styled-components';
import ThemeContext from '../utils/themeProvider';

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
  color: ${(props: any) => props.color};
`;

const HelperText = styled.div`
  width: 100%;
  display: flex;
  font-size: 12px;
  color: ${(props: any) => props.color};
  margin-top: 4px;
`;

const InvalidText = styled.div`
  width: 100%;
  display: flex;
  font-size: 12px;
  color: ${(props: any) => props.color};
  margin-top: 4px;
`;

const StyledInput = styled.input`
  ${(props: any) =>
    css`
      border-radius: ${props.theme.units.borderRadius};
      background-color: ${props.theme.colors.secondary1};
      color: ${props.theme.colors.black};
      height: ${props.theme.elementHeight.default};
      font-size: 14px;
      width: 100%;
      display: flex;
      padding: 0 8px;
      border: 2px solid transparent;
      outline: 0;
      &:hover {
        background-color: ${props.theme.colors.secondary2};
      }
      &:focus {
        background-color: ${props.theme.colors.white};
        border-color: ${props.theme.colors.primary3};
      }
      &:invalid {
        border-color: ${props.theme.colors.danger3};
      }
    `
  };
`;

const Input: FunctionComponent<InputProps> = ({
  children,
  label,
  helperText,
  invalidText,
  invalid,
  ...rest
}) => {
  const theme = useContext(ThemeContext);
  return (
    <InputWrapper>
      <Label color={theme.colors.black}>{label}</Label>
      <StyledInput theme={theme} invalid {...rest}>
        {children}
      </StyledInput>
      {invalid ? (
        <InvalidText color={theme.colors.danger3}>{invalidText}</InvalidText>
      ) : (
        <HelperText color={theme.colors.secondary3}>{helperText}</HelperText>
      )}
    </InputWrapper>
  );
};

export default Input;
