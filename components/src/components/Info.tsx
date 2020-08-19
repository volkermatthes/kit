import React, { FunctionComponent, HTMLAttributes, useContext } from "react";
import styled from "styled-components";
import { Info as Icon } from "react-feather";
import ThemeContext from '../utils/themeProvider';

interface InfoProps extends HTMLAttributes<HTMLDivElement> {
  title?: string;
  message?: string;
}

const StyledInfo = styled.div`
  width: 100%;
  border-radius: ${(props: any) => props.theme.units.borderRadius};
  background-color: ${(props: any) => props.theme.colors.info1};
  padding: 16px;
  display: flex;
  flex-direction: row;
  font-size: 14px;
  font-weight: 400;
  align-items: center;
`;

const IconWrapper = styled.div`
  padding-right: 16px;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.div`
  font-size: 16px;
  font-weight: 500;
  color: ${(props: any) => props.color};
`;

const Message = styled.div`
  color: ${(props: any) => props.color};
`;

const Info: FunctionComponent<InfoProps> = ({
  title,
  message,
  ...rest
}) => {
  const theme = useContext(ThemeContext);
  return (
    <StyledInfo theme={theme} {...rest}>
      <IconWrapper>
        <Icon color={theme.colors.info3} />
      </IconWrapper>
      <ContentWrapper>
        <Title color={theme.colors.info3}>{title}</Title>
        <Message color={theme.colors.info5}>{message}</Message>
      </ContentWrapper>
    </StyledInfo>
  );
};

export default Info;
