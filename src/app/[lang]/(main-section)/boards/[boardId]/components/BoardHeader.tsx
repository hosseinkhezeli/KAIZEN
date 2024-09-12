import React, { FC } from 'react';
import { Avatar, AvatarGroup, Box, Button, Typography } from '@mui/material';
import { PlusIcon, UserIcon } from '@heroicons/react/24/outline';

type TBoarderHeaderProps = {
    boardTitle: string | undefined;
    members: IBoardMember[] | undefined;
};

const BoardHeader: FC<TBoarderHeaderProps> = ({ boardTitle, members }) => {
    return (
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Typography variant={'h2'} component={'h3'} fontWeight={600}>
                {boardTitle}
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <AvatarGroup
                    max={4}
                    spacing={'small'}
                    sx={{ '.MuiAvatar-root': { border: 'none' } }}
                >
                    {members?.map((member, idx) => (
                        <Avatar
                            key={member.id}
                            alt={member.fullName}
                            src={member.profilePictureUrl}
                            sx={{
                                filter: `blur(${idx / 3}px)`,
                                width: { xs: 32, lg: 36 },
                                height: { xs: 32, lg: 36 },
                                border: 'none',
                                stroke: ({ palette }) => palette.grey[400],
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
                <Button
                    startIcon={<PlusIcon width={18} />}
                    sx={{ maxHeight: '36px' }}
                >
                    Invite
                </Button>
            </Box>
        </Box>
    );
};

export default BoardHeader;
