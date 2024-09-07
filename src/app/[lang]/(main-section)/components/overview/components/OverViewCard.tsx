//@3rd Party
import { FC, ReactNode } from 'react';
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//@Mui
import { Divider, Stack, Typography, Box, BoxProps } from '@mui/material';
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
        <>
            <Stack
                sx={{
                    p: '16px 16px',
                    gridColumn: colSpan,
                    border: '1px solid',
                    borderColor: 'divider',
                    borderRadius: 3,
                    gap: 2,
                    backgroundColor: 'background.paper',
                }}
            >
                <Typography
                    variant={'body1'}
                    fontWeight={400}
                    lineHeight={'100%'}
                >
                    {title}
                </Typography>
                <Divider
                    sx={{ borderStyle: 'dotted', borderBottomWidth: '2px' }}
                />
                <Box
                    display={'flex'}
                    gap={2}
                    flexWrap={{ xs: 'wrap', sm: 'nowrap' }}
                    {...containerProps}
                >
                    {children}
                </Box>
            </Stack>
        </>
    );
};

export default OverViewCard;
