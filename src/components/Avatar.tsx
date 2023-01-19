import React, { FunctionComponent, HTMLAttributes } from "react";
import styled, { css } from "styled-components";

export interface AvatarProps extends HTMLAttributes<HTMLPreElement> {
  image?: string;
  name?: string;
  size?: "default" | "small";
}

const StyledAvatar = styled.div`
  display: inline-flex;
  border-radius: 50%;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  background-color: var(--color-primary1);
  color: var(--color-primary3);
  font-weight: bold;
  text-transform: uppercase;
  overflow: hidden;
  ${(props: any) => {
    if (props.size === "small") {
      return css`
        width: var(--element-height-field);
        height: var(--element-height-field);
      `;
    }
    return css`
      width: var(--element-height-default);
      height: var(--element-height-default);
    `;
  }}
`;

const StyledImage = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${(props: any) => props.image});
  background-size: contain;
`;

const Avatar: FunctionComponent<AvatarProps> = ({ image, name, ...rest }) => {
  return (
    <StyledAvatar {...rest}>
      {image ? <StyledImage image={image} /> : name}
    </StyledAvatar>
  );
};

Avatar.defaultProps = {
  size: "default",
};

export { Avatar };
