import React from 'react';

const BG: React.FC = () => {
    return (
        <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 200 200'
            width='100vw'
            height='100%'
            style={{
                position: 'absolute',
                top: 0,
                right: -360,
                filter: 'blur(50px)',
            }}
        >
            {/* Bokeh circles without blur filter */}
            <circle
                className='bokeh bokeh1'
                cx='50'
                cy='100'
                r='35'
                fill='#de9124'
            />
            <circle
                className='bokeh bokeh2'
                cx='100'
                cy='75'
                r='25'
                fill='#e5682a'
            />
            <circle
                className='bokeh bokeh3'
                cx='100'
                cy='150'
                r='30'
                fill='#c44e15'
            />

            {/* Animation styles */}
            <style>
                {`
                    .bokeh {
                        animation: move 4s ease infinite alternate;
                        opacity: 0.2;
                        will-change: transform, opacity;
                    }
                    .bokeh1 {
                        animation-delay: 0s;
                    }
                    .bokeh2 {
                        animation-delay: 1s;
                    }
                    .bokeh3 {
                        animation-delay: 2s;
                    }
                    @keyframes move {
                        0% {
                            transform: translate(0px, 0px);
                        }
                        100% {
                            transform: translate(40px, -40px);
                        }
                    }
                `}
            </style>
        </svg>
    );
};

export default BG;
