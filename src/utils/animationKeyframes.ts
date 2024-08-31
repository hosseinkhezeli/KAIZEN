import { keyframes } from '@mui/material/styles';

export const pop = keyframes`
    0% {
        transform: translateY(-5%);
        opacity: 0;
    }
    100% {
        transform: translateY(0);
        opacity: 100%;
    }
`;

export const fadeOut = keyframes`
    0% {
        opacity: 1;
    }
    100% {
        opacity: 0;
    }
`;

export const bounce = keyframes`
    0% {
        opacity: 0;
        transform: translateY(0);
    }
    20%, 50%, 80%, 100% {
        transform: translateY(0);
    }
    40% {
        transform: translateY(-20px);
    }
    60% {
        transform: translateY(-10px);
    }
    100% {
        transform: translateY(0);
        opacity: 100%;
    }
`;

export const shock = keyframes`
    0% {
        transform: translateY(0%);
    }
    100% {
        transform: translateY(100vh);
    }
`;

export const blinkNDrunk = keyframes`
    0%, 50% ,100% {
        transform: translate(-20%, 5%);
        opacity: 50%;
    }
    25% ,75% {
        transform: translate(0,0);
        opacity: 100%;
    }
`;

export const cominUp = keyframes`
    0%{
        flex-basis:0;
        height:0;
    }
    100% {
    flex-basis:100%;
      height:100%;
  }
`;
export const cominIn = keyframes`
    0%{
        flex-basis:0;
        width:0;
    }
    100% {
    flex-basis:100%;
      width:100%;
  }
`;
