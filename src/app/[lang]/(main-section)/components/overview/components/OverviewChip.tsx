//@3rd Party
import { FC } from 'react';
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//@Mui
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//@Types
type TOverviewProps = {
    count: number | undefined;
    label: string;
};
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const OverviewChip: FC<TOverviewProps> = ({ count, label }) => {
    return (
        <Box
            sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 1,
                borderRadius: 2,
                p: { xs: '0 4px', md: '4px 8px' },
                border: '1px solid',
                borderColor: 'secondary.dark',
                backgroundColor: ({ palette }) =>
                    palette.secondary.light + '20',
            }}
        >
            <Typography variant={'body2'} fontWeight={600} lineHeight={'100%'}>
                {count || 0}
            </Typography>
            <Typography
                variant={'caption'}
                lineHeight={'100%'}
                textAlign={'justify'}
            >
                {label}
            </Typography>
        </Box>
    );
};

export default OverviewChip;
