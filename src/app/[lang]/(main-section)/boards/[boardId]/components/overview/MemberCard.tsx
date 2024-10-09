import React, { FC } from 'react';
import Box from '@mui/material/Box';
import { Avatar, IconButton, Typography } from '@mui/material';
import { TrashIcon, UserIcon } from '@heroicons/react/24/outline';
import { pop, slideIn } from '@styles/animationKeyframes';

type TMemberCardProps = {
    member: IBoardMember;
    idx?: number;
};
const MemberCard: FC<TMemberCardProps> = ({ member, idx }) => {
    return (
        <Box
            display={'flex'}
            alignItems={'center'}
            gap={1}
            bgcolor={({ palette }) => palette.secondary.light + '20'}
            sx={{
                padding: '8px 16px',
                borderRadius: '24px',
                justifyContent: 'space-between',
                opacity: 0,
                transition: 'ease all 0.2s',
                animation: `${pop} 0.2s ease 0.${(idx || 0) * 3}s forwards`,
                '.hidden-button': {
                    opacity: 0,
                    animation: `none`,
                },
                ':hover': {
                    backgroundColor: ({ palette }) =>
                        palette.secondary.light + '30',
                    '.hidden-button': {
                        opacity: 1,
                        animation: `${slideIn} 0.3s ease 1`,
                    },
                },
            }}
        >
            <Box display={'flex'} alignItems={'center'} gap={1}>
                <Avatar src={member?.profilePictureUrl}>
                    <UserIcon width={20} height={20} stroke={'inherit'} />
                </Avatar>
                <Typography variant={'caption'} sx={{ cursor: 'pointer' }}>
                    {member?.fullName || 'Unknown member'}
                </Typography>
            </Box>
            <IconButton className={'hidden-button'} sx={{}}>
                <TrashIcon width={20} height={20} />
            </IconButton>
        </Box>
    );
};

export default MemberCard;
