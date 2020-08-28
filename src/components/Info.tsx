import React, { FunctionComponent, HTMLAttributes } from 'react';
import styled, { css } from 'styled-components';

interface InfoProps extends HTMLAttributes<HTMLDivElement> {
  title?: string;
  message?: string;
  icon?: React.ReactNode;
  kind?: 'info' | 'success' | 'error';
}

const StyledInfo = styled.div`
  width: 100%;
  border-radius: var(--border-radius);
  padding: var(--units-base);
  display: flex;
  flex-direction: row;
  font-size: 14px;
  font-weight: 400;
  align-items: center;
  ${(props: any) => {
    switch (props.kind) {
      case 'success':
        return css`
          background-color: var(--color-success1);
        `;
      case 'error':
        return css`
          background-color: var(--color-error1);
        `;
      default:
        return css`
          background-color: var(--color-info1);
        `;
    }
  }}
`;

const IconWrapper = styled.div`
  padding-right: var(--units-base);
  ${(props: any) => {
    switch (props.kind) {
      case 'success':
        return css`
          color: var(--color-success3);
        `;
      case 'error':
        return css`
          color: var(--color-error3);
        `;
      default:
        return css`
          color: var(--color-info3);
        `;
    }
  }}
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.div`
  font-size: 16px;
  font-weight: 500;
  ${(props: any) => {
    switch (props.kind) {
      case 'success':
        return css`
          color: var(--color-success3);
        `;
      case 'error':
        return css`
          color: var(--color-error3);
        `;
      default:
        return css`
          color: var(--color-info3);
        `;
    }
  }}
`;

const Message = styled.div`
  ${(props: any) => {
    switch (props.kind) {
      case 'success':
        return css`
          color: var(--color-success5);
        `;
      case 'error':
        return css`
          color: var(--color-error5);
        `;
      default:
        return css`
          color: var(--color-info5);
        `;
    }
  }}
`;

const Info: FunctionComponent<InfoProps> = ({ icon, title, message, kind, ...rest }) => {
  return (
    <StyledInfo kind={kind} {...rest}>
      {icon && <IconWrapper kind={kind}>{icon}</IconWrapper>}
      <ContentWrapper>
        <Title kind={kind}>{title}</Title>
        <Message kind={kind}>{message}</Message>
      </ContentWrapper>
    </StyledInfo>
  );
};

Info.defaultProps = {
  kind: 'info',
};

export default Info;
