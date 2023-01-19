import React, { FunctionComponent, HTMLAttributes } from 'react';
import styled, { keyframes } from 'styled-components';

export interface LoaderProps extends HTMLAttributes<HTMLDivElement> {}

const LoaderWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Animation = keyframes`
    0%, 80%, 100% { 
        -webkit-transform: scale(0);
        transform: scale(0);
    } 40% { 
        -webkit-transform: scale(1.0);
        transform: scale(1.0);
    }
`;

const StyledLoader = styled.div``;

const BounceBase = styled.div`
  width: 8px;
  height: 8px;
  background-color: rgba(0, 0, 0, 0.1);
  border-radius: 100%;
  display: inline-block;
  -webkit-animation: ${Animation} 1s infinite ease-in-out both;
  animation: ${Animation} 1s infinite ease-in-out both;
`;

const Bounce1 = styled(BounceBase)`
  -webkit-animation-delay: -0.32s;
  animation-delay: -0.32s;
`;

const Bounce2 = styled(BounceBase)`
  -webkit-animation-delay: -0.16s;
  animation-delay: -0.16s;
`;

const Bounce3 = styled(BounceBase)``;

const Loader: FunctionComponent<HTMLAttributes<HTMLDivElement>> = ({ children, ...rest }) => {
  return (
    <LoaderWrapper>
      <StyledLoader {...rest}>
        <Bounce1></Bounce1>
        <Bounce2></Bounce2>
        <Bounce3></Bounce3>
      </StyledLoader>
    </LoaderWrapper>
  );
};

export { Loader };
