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
        transform: translateY(100%);
      opacity: 0;
    }
    100% {
      transform: translateY(0);
      opacity: 1;
  }
`;
export const cominIn = keyframes`
  0%{
    transform: translateX(-100%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
`;

export const introXs = keyframes`
  0%{
    transform: scale(200%) translateY(15%);
  }
  100% {
    transform: scale(100%) translateY(0%);
  }
`;
export const introSm = keyframes`
  0%{
    transform: scale(200%) translateX(-25%);
  }
  100% {
    transform: scale(100%) translateX(0%);
  }
`;
