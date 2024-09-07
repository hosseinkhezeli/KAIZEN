//@3rd Party
import { FC, ReactNode } from 'react';
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//@Mui
import { Divider, Stack, Typography, Box } from '@mui/material';
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//@Types
type TOverViewCardProps = {
    title: string;
    children: ReactNode;
};
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const OverViewCard: FC<TOverViewCardProps> = ({ title, children }) => {
    return (
        <>
            <Stack
                sx={{
                    p: '16px 16px',
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
                    sx={{
                        display: 'flex',
                        gap: 2,
                        flexWrap: { xs: 'wrap', sm: 'nowrap' },
                    }}
                >
                    {children}
                </Box>
            </Stack>
        </>
    );
};

export default OverViewCard;
