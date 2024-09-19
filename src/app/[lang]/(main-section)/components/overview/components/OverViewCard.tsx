//@3rd Party
import { FC, ReactNode } from 'react';
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//@Mui
import { Divider, Typography, Box, BoxProps } from '@mui/material';
import CustomCard from '@components/custom-card/CustomCard';
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//@Types
type TOverViewCardProps = {
    title: string;
    colSpan?: string;
    containerProps?: BoxProps;
    children: ReactNode;
};
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const OverViewCard: FC<TOverViewCardProps> = ({
    title,
    children,
    colSpan,
    containerProps,
}) => {
    return (
        <CustomCard
            outerBoxProps={{
                sx: {
                    gridColumn: colSpan,
                },
            }}
            innerBoxProps={{
                sx: {
                    display: 'flex',
                    flexDirection: 'column',
                    p: '16px 16px',
                },
            }}
        >
            <Typography variant={'body1'} fontWeight={400} lineHeight={'100%'}>
                {title}
            </Typography>
            <Divider sx={{ borderStyle: 'dotted', borderBottomWidth: '2px' }} />
            <Box
                display={'flex'}
                gap={2}
                flexWrap={{ xs: 'wrap', sm: 'nowrap' }}
                {...containerProps}
            >
                {children}
            </Box>
        </CustomCard>
    );
};

export default OverViewCard;
