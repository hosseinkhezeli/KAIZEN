import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import { pop } from '@styles/animationKeyframes';
import { CalendarIcon } from '@heroicons/react/24/outline';
import Href from '@components/custom-link/CustomLink';

const HPCard = ({ cardInfo }: { cardInfo: ICard }) => {
    return (
        <Href to={'/cards/' + cardInfo.id}>
            <Stack sx={styles.card}>
                <Box sx={styles.eventName}>
                    <CalendarIcon height={22} />
                    <Typography variant='subtitle2'>
                        {cardInfo.title}
                    </Typography>
                </Box>
                <Box sx={styles.boardName}>
                    <Typography variant='caption' sx={{ cursor: 'help' }}>
                        {cardInfo?.description}
                    </Typography>
                </Box>
                <Box sx={styles.dueDate}>
                    <Typography variant='caption'>
                        {cardInfo?.dueDate?.toLocaleString()}
                    </Typography>
                </Box>
            </Stack>
        </Href>
    );
};

export default HPCard;
const styles = {
    card: {
        p: '8px 12px',
        border: '1px solid',
        borderColor: 'grey.700',
        backgroundColor: 'divider',
        borderRadius: 6,
        gap: 1,
        height: '100%',
        minHeight: '200px',
        cursor: 'pointer',
        overflow: 'hidden',
        position: 'relative',
        opacity: 0,
        animation: `${pop} 0.3s ease forwards`,
    },
    eventName: {
        display: 'flex',
        alignItems: 'center',
        gap: 1,
        height: '22px',
    },
    boardName: {
        display: 'flex',

        flexDirection: 'column',
    },
    dueDate: {
        display: 'flex',
        gap: 1,
        height: '22px',
    },
    members: {
        p: '8px 12px',
        display: 'flex',
        gap: 1,
        flexGrow: 1,
        justifyContent: 'space-between',
        alignItems: 'end',
        // height: '22px',
    },
    counter: {
        position: 'absolute',
        right: 0,
        bottom: 20,
        fontSize: 100,
        opacity: '0.1',
    },
};
