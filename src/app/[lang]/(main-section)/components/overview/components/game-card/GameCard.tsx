'use client';
import React, { useState } from 'react';
import { Box, Divider, Grid2 as Grid, Stack, Typography } from '@mui/material';
import Rock from '../../../../../../../../public/images/rock.png';
import Paper from '../../../../../../../../public/images/paper.png';
import Scissors from '../../../../../../../../public/images/scissors.png';
import Image from 'next/image';
import { Theme } from '@mui/material/styles';
import CustomCard from '@components/custom-card/CustomCard';

// Define an interface for the option type
interface Option {
    src: string;
    value: string;
}

// Define the outcomes as a type
type OutcomeMap = {
    [key: string]: string;
};

const GameCard: React.FC = () => {
    const [userResult, setUserResult] = useState<string>('\u{1F91B}');
    const [cpuResult, setCpuResult] = useState<string>('\u{1F91B}');
    const [result, setResult] = useState<string>("Let's Play!!");
    const [isActive, setIsActive] = useState<number | null>(null); // Track the active image

    const options: Option[] = [
        { src: '\u{270A}', value: 'R' },
        { src: '\u{1F590}', value: 'P' },
        { src: '\u{270C}', value: 'S' },
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
        setUserResult('\u{270A}'); // Placeholder while waiting for result
        setCpuResult('\u{270A}'); // Placeholder while waiting for result
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
        <CustomCard
            outerBoxProps={{
                sx: {
                    gridRow: '2 / 4',
                    height: '100%',
                    background: (theme: Theme) => theme.palette.grey[900],
                },
            }}
            innerBoxProps={{
                sx: {
                    display: 'flex',
                    flexDirection: 'column',
                    p: '16px 16px',
                    gap: 1.5,
                    height: '100%',
                    background: (theme: Theme) =>
                        theme.palette.secondary?.dark + '10',
                },
            }}
        >
            <Box
                display={'flex'}
                alignItems={'center'}
                justifyContent={'space-between'}
            >
                <Typography
                    variant={'h6'}
                    fontWeight={300}
                    lineHeight={'100%'}
                    fontSize={18}
                >
                    Have some free time?!
                </Typography>
            </Box>
            <Divider />

            <Stack gap={2} overflow={'auto'} height={'100%'}>
                <Stack
                    sx={{
                        width: '60%',
                        height: '100%',
                        mx: 'auto',
                        justifyContent: 'center',
                    }}
                >
                    <Box
                        className={`container ${isActive !== null ? 'start' : ''}`}
                        sx={{
                            mx: 'auto',
                            borderRadius: '14px',
                            background: 'transparent',
                        }}
                    >
                        <Box>
                            <Grid container>
                                <Grid
                                    size={6}
                                    sx={{
                                        display: 'flex',
                                        justifyContent: 'center',
                                    }}
                                >
                                    <Typography
                                        sx={{
                                            transition: 'ease all 0.2s',
                                            transform:
                                                'scaleX(-200%) scaleY(200%)',
                                            cursor: 'pointer',
                                            ':hover': {
                                                transform:
                                                    'scaleX(-300%) scaleY(300%)',
                                            },
                                        }}
                                    >
                                        {userResult}
                                    </Typography>
                                </Grid>
                                <Grid
                                    size={6}
                                    sx={{
                                        display: 'flex',
                                        justifyContent: 'center',
                                    }}
                                >
                                    <Typography
                                        sx={{
                                            transition: 'ease all 0.2s',
                                            transform: 'scale(200%)',
                                            cursor: 'pointer',
                                            ':hover': {
                                                transform: 'scale(300%)',
                                            },
                                        }}
                                    >
                                        {cpuResult}
                                    </Typography>
                                </Grid>
                            </Grid>
                            <Typography
                                variant='h4'
                                align='center'
                                sx={{
                                    marginTop: '1.5rem',
                                    textAlign: 'center',
                                }}
                            >
                                {result}
                            </Typography>
                        </Box>
                        <Box
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
                                    <Typography
                                        sx={{
                                            transition: 'ease all 0.2s',
                                            transform: 'scale(200%)',
                                            cursor: 'pointer',
                                            ':hover': {
                                                transform: 'scale(300%)',
                                            },
                                        }}
                                    >
                                        {option.src}
                                    </Typography>
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
            </Stack>
        </CustomCard>
    );
};

export default GameCard;
