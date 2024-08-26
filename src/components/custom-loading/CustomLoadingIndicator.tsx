//@3rd Party
import React, { FC } from 'react';
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//@Mui
import { Box, Stack } from '@mui/material';
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//@Animation
import { blinkNDrunk } from '@utils/animationKeyframes';
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//@Types
interface CircleProps {
    fill: string;
    radius: number;
    duration: number;
    transformValues: string;
    animateValues: string;
}
// Define a type for CircleProps

const Circle: FC<CircleProps> = ({
    fill,
    radius,
    duration,
    transformValues,
    animateValues,
}) => {
    return (
        <circle fill={fill} r={radius} cy='41' cx='50'>
            <animateTransform
                values={transformValues}
                keyTimes='0;1'
                repeatCount='indefinite'
                dur={`${duration}s`}
                type='rotate'
                attributeName='transform'
            />
            <animate
                keySplines='0.2 0 0.8 1;0.2 0 0.8 1'
                values={animateValues}
                keyTimes='0;0.5;1'
                calcMode='spline'
                repeatCount='indefinite'
                dur={`${duration}s`}
                attributeName='r'
            />
        </circle>
    );
};

const CustomLoadingIndicator: FC = () => {
    return (
        <Stack
            className={'Mui-Loading'}
            width='100vw'
            height='100vh'
            sx={{
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <Box
                sx={{
                    animation: `${blinkNDrunk} 3s ease infinite`,
                    filter: 'blur(15px)',
                }}
                width='200px'
                height='200px'
            >
                <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 100 100'
                    preserveAspectRatio='xMidYMid'
                    width='200'
                    height='200'
                    style={{
                        shapeRendering: 'auto',
                        display: 'block',
                        background: 'transparent',
                    }}
                    xmlnsXlink='http://www.w3.org/1999/xlink'
                >
                    <g>
                        <g transform='translate(0 -7.5)'>
                            <Circle
                                fill='#faa21e'
                                radius={10}
                                duration={3}
                                transformValues='0 50 50;360 50 50'
                                animateValues='0;15;0'
                            />
                            <Circle
                                fill='#344D98'
                                radius={10}
                                duration={1}
                                transformValues='180 50 50;540 50 50'
                                animateValues='15;0;15'
                            />
                            <Circle
                                fill='#3fa6d2'
                                radius={7}
                                duration={1.5}
                                transformValues='180 50 50;540 50 50'
                                animateValues='0;15;0'
                            />
                            <Circle
                                fill='#faa21e'
                                radius={12}
                                duration={4}
                                transformValues='0 50 50;360 50 50'
                                animateValues='0;15;0'
                            />
                        </g>
                    </g>
                </svg>
            </Box>
        </Stack>
    );
};

export default CustomLoadingIndicator;
