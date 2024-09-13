import React, { FC } from 'react';
import Box from '@mui/material/Box';
import { Avatar, IconButton, Typography } from '@mui/material';
import { TrashIcon, UserIcon } from '@heroicons/react/24/outline';

type TMemberCardProps = {
    member: IBoardMember;
};
const MemberCard: FC<TMemberCardProps> = ({ member }) => {
    return (
        <Box
            display={'flex'}
            alignItems={'center'}
            gap={1}
            bgcolor={({ palette }) => palette.secondary.light + '10'}
            sx={{
                padding: '8px 16px',
                borderRadius: '8px',
                justifyContent: 'space-between',
                '.hidden-button': {
                    opacity: 0,
                },
                ':hover': {
                    backgroundColor: ({ palette }) =>
                        palette.secondary.light + '20',
                    '.hidden-button': {
                        opacity: 1,
                    },
                },
            }}
        >
            <Box display={'flex'} alignItems={'center'} gap={1}>
                <Avatar src={member.profilePictureUrl}>
                    <UserIcon width={20} height={20} stroke={'inherit'} />
                </Avatar>
                <Typography variant={'caption'} sx={{ cursor: 'pointer' }}>
                    {member.fullName || 'Unknown member'}
                </Typography>
            </Box>
            <IconButton className={'hidden-button'}>
                <TrashIcon width={20} height={20} />
            </IconButton>
        </Box>
    );
};

export default MemberCard;
