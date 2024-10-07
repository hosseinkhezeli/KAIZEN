import React from 'react';
import { Avatar } from '@mui/material';
import { UserIcon } from '@heroicons/react/24/outline';

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
