//@3rd party
import React from 'react';
//______________________________________________________________

//@Mui
import { Avatar, AvatarGroup } from '@mui/material';
//______________________________________________________________

//@Assets
import { UserIcon } from '@heroicons/react/24/outline';
//______________________________________________________________

//@Types
type TKaizenAvatarGroupProps = {
    members: IBoardMember[] | undefined;
};
//______________________________________________________________

export function KaizenAvatarGroup({ members = [] }: TKaizenAvatarGroupProps) {
    return (
        <AvatarGroup
            max={4}
            spacing='small'
            sx={{ '.MuiAvatar-root': { border: 'none' } }}
        >
            {members?.length ? (
                members?.map((member, idx) => (
                    <Avatar
                        key={member?.id}
                        alt={member?.fullName}
                        src={member?.profilePictureUrl}
                        sx={{ filter: `blur(${idx / 3}px)` }}
                    >
                        <UserIcon width={20} height={20} stroke='inherit' />
                    </Avatar>
                ))
            ) : (
                <PlaceholderAvatars />
            )}
        </AvatarGroup>
    );
}

export function PlaceholderAvatars() {
    return (
        <>
            {new Array(4).fill(null).map((_, idx) => (
                <Avatar
                    key={idx}
                    alt=''
                    src=''
                    sx={{ filter: `blur(${idx / 3}px)` }}
                >
                    <UserIcon width={20} height={20} stroke='inherit' />
                </Avatar>
            ))}
        </>
    );
}
