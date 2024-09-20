import {
    Avatar,
    AvatarGroup,
    Box,
    IconButton,
    Skeleton,
    Stack,
} from '@mui/material';
import { CalendarIcon, PlusIcon, UserIcon } from '@heroicons/react/24/outline';
import React from 'react';

const EventCardLoading = () => (
    <Stack sx={styles.card}>
        <Box sx={styles.eventName}>
            <CalendarIcon width={22} />
            <Skeleton variant='text' sx={{ minHeight: 0 }} width={'50%'} />
        </Box>
        <Box sx={styles.boardName}>
            <Skeleton variant='text' sx={{ flexGrow: 1, minHeight: 0 }} />
        </Box>
        <Box sx={styles.dueDate}>
            <Skeleton variant='text' width={'40%'} />
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
                        <UserIcon width={20} height={20} stroke={'inherit'} />
                    </Avatar>
                ))}
            </AvatarGroup>
            <IconButton sx={{ borderRadius: '24px' }} color={'inherit'}>
                <PlusIcon width={22} stroke={'inherit'} />
            </IconButton>
        </Box>
    </Stack>
);

const styles = {
    card: {
        p: '8px 12px',
        border: '1px solid',
        borderColor: 'divider',
        backgroundColor: 'background.paper',
        borderRadius: 6,
        gap: 1,
        height: '100%',
        minHeight: '200px',
        cursor: 'pointer',
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
};

export default EventCardLoading;
