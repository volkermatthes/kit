import React, { FunctionComponent, HTMLAttributes } from 'react';
import styled from 'styled-components';

interface InfoProps extends HTMLAttributes<HTMLDivElement> {
  title?: string;
  message?: string;
}

const StyledInfo = styled.div`
  width: 100%;
  border-radius: var(--border-radius);
  background-color: var(--color-info1);
  padding: var(--units-base);
  display: flex;
  flex-direction: row;
  font-size: 14px;
  font-weight: 400;
  align-items: center;
`;

const IconWrapper = styled.div`
  padding-right: var(--units-base);
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.div`
  font-size: var(--font-size-base);
  font-weight: 500;
  color: var(--color-info3);
`;

const Message = styled.div`
  color: var(--color-info5);
`;

const Info: FunctionComponent<InfoProps> = ({ title, message, ...rest }) => {
  return (
    <StyledInfo {...rest}>
      <IconWrapper>i</IconWrapper>
      <ContentWrapper>
        <Title>{title}</Title>
        <Message>{message}</Message>
      </ContentWrapper>
    </StyledInfo>
  );
};

export default Info;
