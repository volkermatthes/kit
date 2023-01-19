import React, { useState, FunctionComponent, useEffect, InputHTMLAttributes, useRef } from 'react';
import styled, { css } from 'styled-components';

export interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  checked?: boolean;
  label?: string;
}

const StyledInput = styled.input`
  display: none;
`;

const StyledCheckbox = styled.label`
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;
  &:before {
    width: 16px;
    height: 16px;
    display: block;
    background-color: var(--color-secondary2);
    border-radius: var(--border-radius);
    content: '';
    transition: all 0.1s ease-in-out;
  }
  &:after {
    content: '✓';
    color: var(--color-white);
    display: block;
    font-weight: bold;
    width: 16px;
    height: 16px;
    text-align: center;
    line-height: 16px;
    position: absolute;
    opacity: 0;
    visibility: hidden;
    transform: scale(0.2);
    transition: all 0.1s ease-in-out;
  }
  ${(props: any) => {
    if (props.test) {
      return css`
        &:before {
          background-color: var(--color-primary3);
        }
        &:after {
          opacity: 1;
          visibility: visible;
          transform: scale(1);
        }
      `;
    }
  }}
`;

const StyledLabel = styled.span`
  margin-left: var(--units-medium);
  user-select: none;
`;

const Checkbox: FunctionComponent<CheckboxProps> = ({
  className,
  label,
  disabled,
  onChange,
  checked,
  ...rest
}) => {
  const [isChecked, setIsChecked] = useState(!!checked);
  const inputEl = useRef(null);

  useEffect(() => {
    console.log(isChecked);
  }, [isChecked]);

  useEffect(() => {
    setIsChecked(checked);
  }, [checked]);

  const handleChange = () => {
    if (checked === undefined) {
      setIsChecked(inputEl.current.checked);
    }
    if (onChange) {
      return onChange(inputEl.current);
    }
  };

  return (
    <StyledCheckbox test={isChecked} className={className}>
      <StyledInput
        type="checkbox"
        checked={checked !== undefined ? checked : isChecked}
        disabled={disabled}
        onChange={handleChange}
        ref={inputEl}
        {...rest}
      />
      {label && <StyledLabel>{label}</StyledLabel>}
    </StyledCheckbox>
  );
};

export { Checkbox };
