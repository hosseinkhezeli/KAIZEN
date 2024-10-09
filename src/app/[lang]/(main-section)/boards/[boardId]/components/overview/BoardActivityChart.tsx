'use client';
//@Mui
import {
    Box,
    Button,
    Grid2 as Grid,
    Stack,
    styled,
    Typography,
} from '@mui/material';
// ___________________________________________________________________

//@Hooks
import { getShortMonthName } from '@utils/methods';
import { useActivityChart } from '@/app/[lang]/(main-section)/boards/[boardId]/hooks/useActivityChart';
// ___________________________________________________________________

export function ActivityChart({
    data,
}: {
    data: IBoardActivityLog[] | undefined;
}) {
    const { months, daysInYear, contributionsByDay, setYear, year } =
        useActivityChart({
            data,
        });
    return (
        <Container>
            <ChartContainer>
                <MonthsContainer>
                    {months?.map((month, idx) => (
                        <Typography key={idx} variant={'caption'}>
                            {getShortMonthName(month, 'en')}
                        </Typography>
                    ))}
                </MonthsContainer>
                <Chart container spacing={0.7}>
                    {daysInYear.map((day) => {
                        const dateString = day.toISOString().split('T')[0];
                        const contributionCount =
                            contributionsByDay[dateString] || 0;
                        let backgroundColor;
                        if (contributionCount > 1) {
                            backgroundColor = 'success.2'; // More than one contribution
                        } else if (contributionCount === 1) {
                            backgroundColor = 'success.main'; // One contribution
                        } else {
                            backgroundColor = 'grey.200'; // No contributions
                        }

                        return (
                            <Grid
                                key={dateString}
                                sx={{ display: 'inline-block' }}
                            >
                                <ChartDay bgcolor={backgroundColor} />
                            </Grid>
                        );
                    })}
                </Chart>
            </ChartContainer>
            <YearSelectorContainer>
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
            </YearSelectorContainer>
        </Container>
    );
}
const Container = styled(Stack)(() => ({
    flexDirection: 'row',
    gap: 8,
}));

const ChartContainer = styled(Box)(({ theme }) => ({
    overflowX: 'auto',
    whiteSpace: 'nowrap',
    padding: 8,
    border: '1px solid',
    borderColor: theme.palette.divider,
    borderRadius: 8,
}));
const MonthsContainer = styled(Box)(({ theme }) => ({
    display: 'flex',
    width: '200%',
    justifyContent: 'space-between',
    padding: 8,
}));

const Chart = styled(Grid)(() => ({
    minWidth: '200%',
}));

const ChartDay = styled(Box)(() => ({
    width: 10,
    height: 10,
    borderRadius: 2,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const YearSelectorContainer = styled(Stack)(() => ({
    gap: 4,
}));
