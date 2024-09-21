'use client';
import React, { useState } from 'react';
import { Box, Grid2 as Grid, Stack, Typography } from '@mui/material';
import './style.module.css';
import Rock from '../../../../../../../../public/images/rock.png';
import Paper from '../../../../../../../../public/images/paper.png';
import Scissors from '../../../../../../../../public/images/scissors.png';
import Image, { StaticImageData } from 'next/image';

// Define an interface for the option type
interface Option {
    src: StaticImageData;
    value: string;
}

// Define the outcomes as a type
type OutcomeMap = {
    [key: string]: string;
};

const GameCard: React.FC = () => {
    const [userResult, setUserResult] = useState<StaticImageData>(Rock);
    const [cpuResult, setCpuResult] = useState<StaticImageData>(Rock);
    const [result, setResult] = useState<string>("Let's Play!!");
    const [isActive, setIsActive] = useState<number | null>(null); // Track the active image

    const options: Option[] = [
        { src: Rock, value: 'R' },
        { src: Paper, value: 'P' },
        { src: Scissors, value: 'S' },
    ];

    const outcomes: OutcomeMap = {
        RR: 'Draw',
        RP: 'Cpu',
        RS: 'User',
        PP: 'Draw',
        PR: 'User',
        PS: 'Cpu',
        SS: 'Draw',
        SR: 'Cpu',
        SP: 'User',
    };

    const handleClick = (index: number) => {
        setIsActive(index);
        setUserResult(Rock); // Placeholder while waiting for result
        setCpuResult(Rock); // Placeholder while waiting for result
        setResult('Wait...');

        setTimeout(() => {
            const userValue = options[index].value;
            const randomNumber = Math.floor(Math.random() * options.length);
            const cpuValue = options[randomNumber].value;

            setUserResult(options[index].src);
            setCpuResult(options[randomNumber].src);

            const outcomeKey = userValue + cpuValue;
            const outcomeValue = outcomes[outcomeKey];
            setResult(
                userValue === cpuValue ? 'Match Draw' : `${outcomeValue} Won!!`,
            );
        }, 1500);
    };

    return (
        <Stack sx={{ width: '100%', height: '100%', justifyContent: 'center' }}>
            <Box
                className={`container ${isActive !== null ? 'start' : ''}`}
                sx={{
                    mx: 'auto',
                    borderRadius: '14px',
                    background: 'transparent',
                }}
            >
                <Box className='result_field'>
                    <Grid container className='result_images'>
                        <Grid
                            size={6}
                            className='user_result'
                            sx={{ display: 'flex', justifyContent: 'center' }}
                        >
                            <Image
                                width={50}
                                height={50}
                                src={userResult}
                                alt='User Result'
                                style={{
                                    width: '50px',
                                    transform: 'rotate(90deg)',
                                    filter: 'grayscale(1)',
                                    margin: '0 auto',
                                }}
                            />
                        </Grid>
                        <Grid
                            size={6}
                            className='cpu_result'
                            sx={{ display: 'flex', justifyContent: 'center' }}
                        >
                            <Image
                                width={50}
                                height={50}
                                src={cpuResult}
                                alt='CPU Result'
                                style={{
                                    width: '50px',
                                    transform: 'rotate(-90deg) rotateY(180deg)',
                                    filter: 'grayscale(1)',
                                    margin: '0 auto',
                                }}
                            />
                        </Grid>
                    </Grid>
                    <Typography
                        variant='h4'
                        align='center'
                        className='result'
                        sx={{ marginTop: '1.5rem', textAlign: 'center' }}
                    >
                        {result}
                    </Typography>
                </Box>
                <Box
                    className='option_images'
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        marginTop: '2.5rem',
                        justifyContent: 'space-between',
                        gap: 2,
                    }}
                >
                    {options.map((option, index) => (
                        <Box
                            key={index}
                            className={`option_image ${isActive === index ? 'active' : ''}`}
                            onClick={() => handleClick(index)}
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                opacity: 0.5,
                                cursor: 'pointer',
                                transition: 'opacity 0.3s ease',
                                '&:hover': {
                                    opacity: 1,
                                },
                            }}
                        >
                            <Image
                                width={30}
                                height={30}
                                src={option.src}
                                alt={option.value}
                                style={{
                                    width: '30px',
                                    pointerEvents: 'none',
                                    filter: 'hue-rotate(300deg)',
                                }}
                            />
                            <Typography
                                variant='body1'
                                sx={{
                                    // color: '#7d2ae8',
                                    fontSize: '1.235rem',
                                    marginTop: '1rem',
                                    pointerEvents: 'none',
                                }}
                            >
                                {option.value === 'R'
                                    ? 'Rock'
                                    : option.value === 'P'
                                      ? 'Paper'
                                      : 'Scissors'}
                            </Typography>
                        </Box>
                    ))}
                </Box>
            </Box>
        </Stack>
    );
};

export default GameCard;
