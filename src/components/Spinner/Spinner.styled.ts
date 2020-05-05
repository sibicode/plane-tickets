import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
  100% {
    transform: rotate(360deg);
  }
`;

const dash = keyframes`
  0% {
    stroke-dasharray: 1, 150;
    stroke-dashoffset: 0;
  }

  50% {
    stroke-dasharray: 90, 150;
    stroke-dashoffset: -35;
  }

  100% {
    stroke-dasharray: 90, 150;
    stroke-dashoffset: -124;
  }
`;

export const Wrapper = styled.div`
  width: 60px;
  height: 60px;
  margin: auto;

  & svg {
    animation: ${rotate} 2s linear infinite;
    width: 100%;
    height: 100%;
  }

  & circle {
    stroke: #2196f3;
    stroke-linecap: round;
    animation: ${dash} 1.5s ease-in-out infinite;
    stroke-width: 4px;
  }
`;
