import React, { FC } from 'react';
import {
    Box,
    Typography,
    Stack,
    AvatarGroup,
    Avatar,
    IconButton,
} from '@mui/material';
import { CalendarIcon, PlusIcon, UserIcon } from '@heroicons/react/24/outline';
import { pop } from '@styles/animationKeyframes';

interface BoardCardLoadedProps {
    boardInfo: IGetDashboardData | undefined;
    page: number;
}

const EventCardLoaded: FC<BoardCardLoadedProps> = ({ boardInfo, page }) => {
    return (
        <Stack sx={styles.card}>
            <Box sx={styles.eventName}>
                <CalendarIcon height={22} />
                <Typography variant='subtitle2'>Release version 1.0</Typography>
            </Box>
            <Box sx={styles.boardName}>
                <Typography variant='caption' sx={{ cursor: 'help' }}>
                    {boardInfo?.title || ''}
                </Typography>
            </Box>
            <Box sx={styles.dueDate}>
                <Typography variant='caption'>
                    {new Date(Date.now()).toLocaleDateString()}
                </Typography>
            </Box>
            <Box sx={styles.members}>
                <AvatarGroup
                    max={4}
                    spacing={'small'}
                    dir={'rtl'}
                    sx={{
                        '.MuiAvatar-root': { border: 'none' },
                        '.MuiAvatar-root:last-child': { ml: '-8px' },
                    }}
                >
                    {new Array(4).fill(undefined).map((_, idx) => (
                        <Avatar
                            key={idx}
                            alt={''}
                            src={''}
                            sx={{
                                filter: `opacity(${0.5 / idx})`,
                            }}
                        >
                            <UserIcon
                                width={20}
                                height={20}
                                stroke={'inherit'}
                            />
                        </Avatar>
                    ))}
                </AvatarGroup>
                <IconButton sx={{ borderRadius: '24px' }} color={'inherit'}>
                    <PlusIcon width={22} stroke={'inherit'} />
                </IconButton>
            </Box>
            {/*<Typography*/}
            {/*    fontSize={150}*/}
            {/*    fontWeight={200}*/}
            {/*    component={'span'}*/}
            {/*    sx={styles.counter}*/}
            {/*>*/}
            {/*    +{page + 1}*/}
            {/*</Typography>*/}
        </Stack>
    );
};

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
        transition: '0.3s ease border-color',
        ':hover': {
            borderColor: 'primary.main',
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

export default EventCardLoaded;
