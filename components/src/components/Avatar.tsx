import React, { FunctionComponent, HTMLAttributes, useContext } from 'react';
import styled, { css } from 'styled-components';
import ThemeContext from '../utils/themeProvider';

interface AvatarProps extends HTMLAttributes<HTMLPreElement> {
  image?: string;
  name?: string;
  size?: 'default' | 'small';
}

const StyledAvatar = styled.div`
  display: inline-flex;
  border-radius: 50%;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  background-color: ${(props: any) => props.theme.colors.primary1};
  color: ${(props: any) => props.theme.colors.primary3};
  font-weight: bold;
  text-transform: uppercase;
  overflow: hidden;
  ${(props: any) => {
    if (props.size === 'small') {
      return css`
        width: ${(props: any) => props.theme.elementHeight.field};
        height: ${(props: any) => props.theme.elementHeight.field};
      `;
    }
    return css`
      width: ${(props: any) => props.theme.elementHeight.default};
      height: ${(props: any) => props.theme.elementHeight.default};
    `;
  }}
`;

const Avatar: FunctionComponent<AvatarProps> = ({ image, name, ...rest }) => {
  const theme = useContext(ThemeContext);
  return (
    <StyledAvatar theme={theme} {...rest}>
      {image ? <img src={image} alt={name + ' - Avatar'} /> : name}
    </StyledAvatar>
  );
};

Avatar.defaultProps = {
    size: 'default',
}

export default Avatar;
