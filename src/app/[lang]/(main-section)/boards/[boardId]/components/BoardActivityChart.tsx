// components/ContributionChart.js
import React, { useState } from 'react';
import { Box, Button, Grid2 as Grid, Stack, Typography } from '@mui/material';
import { getShortMonthName } from '@utils/methods';

const ActivityChart = ({ data }: { data: IBoardActivityLog[] | undefined }) => {
    const [year, setYear] = useState(2023);

    const getDaysInYear = (year: number) => {
        const days = [];
        const startDate = new Date(year, 0, 1);
        const endDate = new Date(year, 11, 31);

        let currentDate = startDate;
        while (currentDate <= endDate) {
            days.push(new Date(currentDate));
            currentDate.setDate(currentDate.getDate() + 1); // Move to the next day
        }
        return days;
    };

    const contributionsByDay: any = {};
    data?.forEach(({ timestamp }) => {
        const date = new Date(timestamp).toISOString().split('T')[0];
        contributionsByDay[date] = (contributionsByDay[date] || 0) + 1; // Count contributions by day
    });

    const daysInYear = getDaysInYear(year);
    const months = Array.from({ length: 12 }, (_, i) =>
        new Date(new Date(Date.now()).setMonth(i + 1)).getMonth(),
    );
    return (
        <Stack flexDirection={'row'} gap={2}>
            <Box
                sx={{
                    overflowX: 'auto',
                    whiteSpace: 'nowrap',
                    padding: '8px',
                }}
            >
                <Box
                    display={'flex'}
                    width={'200%'}
                    justifyContent={'space-between'}
                    p={'8px'}
                >
                    {months?.map((month, idx) => (
                        <Typography key={idx} variant={'caption'}>
                            {getShortMonthName(month, 'en')}
                        </Typography>
                    ))}
                </Box>
                <Grid container spacing={0.7} sx={{ minWidth: '200%' }}>
                    {daysInYear.map((day) => {
                        const dateString = day.toISOString().split('T')[0];
                        const contributionCount =
                            contributionsByDay[dateString] || 0;

                        // Determine the color based on the number of contributions
                        let backgroundColor;
                        if (contributionCount > 1) {
                            backgroundColor = 'darkgreen'; // More than one contribution
                        } else if (contributionCount === 1) {
                            backgroundColor = 'green'; // One contribution
                        } else {
                            backgroundColor = 'lightgray'; // No contributions
                        }

                        return (
                            <Grid
                                key={dateString}
                                sx={{ display: 'inline-block' }}
                            >
                                <Box
                                    sx={{
                                        width: '10px',
                                        height: '10px', // Increased height for better visibility
                                        backgroundColor: backgroundColor,
                                        borderRadius: '2px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                    }}
                                />
                            </Grid>
                        );
                    })}
                </Grid>
            </Box>
            <Stack gap={1}>
                {[2024, 2023].map((currYear, idx) => (
                    <Button
                        key={idx}
                        {...(year === currYear && {
                            variant: 'contained',
                            color: 'info',
                        })}
                        onClick={() => setYear(currYear)}
                    >
                        {currYear}
                    </Button>
                ))}
            </Stack>
        </Stack>
    );
};

export default ActivityChart;
