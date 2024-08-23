import React from 'react';

const BG = ({ style }: { style?: React.CSSProperties | undefined }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      xmlnsXlink='http://www.w3.org/1999/xlink'
      style={{
        margin: 'auto',
        display: 'block',
        position: 'absolute',
        zIndex: -1,
        top: 0,
        left: 0,
        ...style,
      }}
      width='100vw'
      height='100%'
    >
      <g transform='translate(683,325.5) scale(1,1) translate(-683,-325.5)'>
        <linearGradient id='ldbk-w6huv53jzi' x1='-1.5' y1='0' x2='0.5' y2='1'>
          <animate
            attributeName='y2'
            repeatCount='indefinite'
            dur='7s'
            keyTimes='0;0.5;1'
            values='-1;1;-1'
            keySplines='0.5 0 0.5 1;0.5 0 0.5 1'
            calcMode='spline'
          ></animate>
          <stop stopColor='#985bf6' offset='0'></stop>
          <stop stopColor='#01002c' offset='1'></stop>
        </linearGradient>
        <rect
          x='0'
          y='0'
          width='100%'
          height='100%'
          fill='url(#ldbk-w6huv53jzi)'
        ></rect>
      </g>
    </svg>
  );
};

export default BG;
