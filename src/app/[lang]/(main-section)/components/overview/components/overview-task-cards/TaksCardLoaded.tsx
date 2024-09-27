import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import { pop } from '@styles/animationKeyframes';
import { RectangleStackIcon } from '@heroicons/react/24/outline';
import Href from '@components/custom-link/CustomLink';
import { checkDate } from '@utils/methods';
import { Theme } from '@mui/material/styles';

export function TaskCardLoaded({ cardInfo }: { cardInfo: ICard | undefined }) {
    const dueDate = checkDate(cardInfo?.dueDate || ' ');
    return (
        <Href to={'/cards/' + cardInfo?.id}>
            <Stack sx={styles.card}>
                <Box sx={styles.eventName}>
                    <RectangleStackIcon height={22} />
                    <Typography variant='subtitle2'>
                        {cardInfo?.title}
                    </Typography>
                </Box>
                <Box sx={styles.boardName}>
                    <Typography variant='caption'>
                        {cardInfo?.description}
                    </Typography>
                </Box>
                <Box sx={styles.dueDate}>
                    <Typography variant='caption' color={getColor(dueDate)}>
                        {getEmoji(dueDate)}
                        {new Date(
                            cardInfo?.dueDate || ' ',
                        )?.toLocaleDateString()}
                        {getEmoji(dueDate)}
                    </Typography>
                </Box>
            </Stack>
        </Href>
    );
}

const styles = {
    card: {
        p: '8px 12px',
        border: '1px solid',
        borderColor: 'grey.700',
        backgroundColor: (theme: Theme) => theme.palette.divider + '70',
        borderRadius: 6,
        gap: 1,
        height: '100%',
        minHeight: 'max-content',
        cursor: 'pointer',
        overflow: 'hidden',
        position: 'relative',
        opacity: 0,
        animation: `${pop} 0.3s ease forwards`,
        transition: '0.3s ease all',
        ':hover': {
            borderColor: 'primary.main',
            backgroundColor: (theme: Theme) => theme.palette.divider,
            '.board-card-bg': {
                filter: 'opacity(1) grayscale(0)',
                transform: 'scale(101%)',
            },
        },
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
    },
    counter: {
        position: 'absolute',
        right: 0,
        bottom: 20,
        fontSize: 100,
        opacity: '0.1',
    },
};
const getColor = (dueDateStatus: string) => {
    if (dueDateStatus === 'Past') return 'error';
    if (dueDateStatus === 'Future') return 'info';
    return 'warning';
};

const getEmoji = (dueDateStatus: string) => {
    if (dueDateStatus === 'Past') return '🚨';
    if (dueDateStatus !== 'Future') return '🚧';
    return '';
};
